# zaport 

> Gracefully close all processes on a specific port. Target TCP, UDP or both.

[![Build Status](https://travis-ci.org/radiovisual/zaport.svg?branch=master)](https://travis-ci.org/radiovisual/zaport) :zap:

# ![zaport](media/screenshot.png)

**Note** This module is currently working for me on my mac, but currently, a [bug is keeping it from running on windows](https://github.com/radiovisual/zaport/issues/1) and it [needs unit tests](https://github.com/radiovisual/zaport/issues/2). I don't have time to focus on these issues right now, so if you are willing to help out, pull requests are welcome. :sunglasses:   

## Install

```
$ npm install --global zaport
```


## Usage

```
$ zaport --help

Close all activity on a given port. Only zaps TCP ports by default.

	 Usage
	   $ zaport <port> <options>

	 Options
	   -t, --tcp   only zap TCP activity (default)
	   -u, --udp   only zap UDP activity
	   -a, --all   zap all TCP/UDP activity
       -l, --list  lists the pids without zapping
       
	 Examples
	   $ zaport 8010 -a
	   $ zaport 8010 --all
	   $ zaport 8010 -t
```

## Notes

Because `zaport` targets TCP by default, all three of these commands are the same: 
```
$ zaport 8010
$ zaport 8010 --tcp
$ zaport 8010 -t
```

If you want to get a list of pids running on the port **without zapping the activity**, use `-l` or `--list`:

```
$ zaport 8010 --list
$ zaport 8010 -l
```

## License

MIT © [Michael Wuergler](http://numetriclabs.com)
