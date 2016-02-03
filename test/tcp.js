const server = require('express')();
import zaport from './../index.js';
import test from 'ava';

test.beforeEach(t => {
	const listener = server.listen(0);
	t.context.listener = listener;
	t.context.port = listener.address().port;
	console.log('running test server on port: ', t.context.port);
});

// TODO: Actually write some meaningful tests!
// https://github.com/radiovisual/zaport/issues/2
test('default: zaps tcp processes on specified port', t => {
	t.true(false);
});

test('does not zap ports in list mode', t => {
	t.true(false);
});

test.afterEach(t => {
	t.context.listener.close();
	console.log('closing test server on port: ', t.context.port);
});

