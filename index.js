'use strict';
var listToArray = require('list-to-array');
var execa = require('execa');
var fkill = require('fkill');
var chalk = require('chalk');

module.exports = function (port, opts) {
	opts = opts || {};

	if (!port) {
		showHelp();
		process.exit(1);
	}

	var cmd = command(port);

	execa.shell(cmd).then(result => {
		var args = listToArray(result.stdout, '\n');

		if (args.length > 0) {
			console.log('\n', chalk.bgRed(' zapping port: '), port);
		}
		args.map(function (pid, index) {
			console.log(chalk.gray(' └─'), chalk.green('✓'), chalk.gray(' pid: ', pid));

			fkill(parseInt(pid, 10));

			if (++index === args.length) {
				console.log('\n');
			}
		});
	}).catch(function (err) {
		console.log('no processes zapped.\nError: ', err);
	});
};

function command(port) {
	var win = 'FOR /F "tokens=5 delims= " %P IN ("netstat -a -n -o ^| findstr :' + port + '") DO @ECHO %P';
	var mac = 'lsof -i :' + port + ' | awk \'NR!=1 {print $2}\'';

	return process.platform === 'win32' ? win : mac;
}

function showHelp() {
	console.log('Usage');
	console.log('  $ zaport [port]');
}
