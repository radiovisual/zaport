import noopServer from 'noop-server';
import listToArray from 'list-to-array';
import execa from 'execa';
import test from 'ava';
import portzap from './';

function command(port) {
	return process.platform === 'win32' ? `netstat -ano | findstr ${port}` : `ls -i :${port}`;
}

test('zaps processes on specified port', t => {
	noopServer().then(port => {
		console.log('noop port: ', port);
		cmd = command(port);



		get(cmd).then(procs => {
			console.log('before procs: ', procs);
			t.is(Array.isArray(procs));
			t.true(procs.length > 0);
		});

		portzap(port).then(() => {
			get(cmd).then(procs => {
				console.log('after procs: ', procs);
				t.true(procs.length === 0);
			});
		}).catch(err => {
			t.fail(err);
		});
	});
});



