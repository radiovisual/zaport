#!/usr/bin/env node
'use strict';
var meow = require('meow');
var zaport = require('./index.js');

var cli = meow([
	'Usage',
	'  $ zaport [port]',
	''
]);

zaport(cli.input[0]);
