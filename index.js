'use strict';
var arrayUnique = require('array-unique');
var multiline = require('multiline');
var pids = require('port-pid');
var fkill = require('fkill');
var chalk = require('chalk');

require('native-promise-only');

module.exports = function (input, flags) {
	flags = flags || {};

	if (!input) {
		showHelp();
		process.exit(0);
	}

	if (isNaN(input)) {
		throw new TypeError('zaport expects a port number');
	}

	pids(input).then(function (pids) {
		var allpids = pids.all;
		var tcppids = pids.tcp;
		var udppids = pids.udp;

		var port = input;

		// console.log(pids, flags);

		function which(pid) {
			return tcppids.indexOf(pid) === -1 ? 'UDP' : 'TCP';
		}

		var que = [];

		if (flags.a || flags.all) {
			que = que.concat(allpids);
		}

		if (flags.t || flags.tcp) {
			que = que.concat(tcppids);
		}

		if (flags.u || flags.udp) {
			que = que.concat(udppids);
		}

		if (Object.keys(flags).length === 0) {
			que = que.concat(tcppids);
		}

		que = arrayUnique(que);

		if (que.length > 0) {
			console.log('\n', chalk.bgRed(' zapping port: '), port);
		}

		que.map(function (pid, index) {
			console.log(chalk.gray(' └─'), chalk.green('✓'), chalk.gray(which(pid)), chalk.gray('pid: ', pid));

			fkill(parseInt(pid, 10)).then(function () {

			}).catch(function () {
				console.log(chalk.gray(' └─'), chalk.red('x'), chalk.gray(which(pid)), chalk.gray('pid: ', pid));
			});

			if (++index === que.length) {
				console.log('\n');
			}
		});
	});
};

function showHelp() {
	console.log(multiline(function () {/*

	 Close all activity on a given port. Only zaps TCP ports by default.

	 Usage
	   $ zaport <port> <options>

	 Options
	   -t, --tcp  only zap TCP activity (default)
	   -u, --udp  only zap UDP activity
	   -a, --all  zap all TCP/UDP activity

	 Examples
	   $ zaport 8010 -a
	   $ zaport 8010 --all
	   $ zaport 8010 -t

	 */}));
}
