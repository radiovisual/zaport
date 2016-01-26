#!/usr/bin/env node
'use strict';
var meow = require('meow');
var zaport = require('./index.js');

var cli = meow([
	'',
	'Close all activity on a given port. Only zaps TCP ports by default.',
	'',
	'Usage',
	'  $ zaport <port> <options>',
	'',
	'Options',
	'  -t, --tcp  only zap TCP activity (default)',
	'  -u, --udp  only zap UDP activity',
	'  -a, --all  zap all TCP/UDP activity',
	'',
	'Examples',
	'  $ zaport 8010 -a',
	'  $ zaport 8010 --all',
	'  $ zaport 8010 -t',
	''
], {
	alias: {
		a: 'all',
		u: 'udp',
		t: 'tcp'
	}
});

zaport(cli.input[0], cli.flags);
