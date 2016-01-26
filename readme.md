# zaport 

> Gracefully close all processes on a specific port

[![Build Status](https://travis-ci.org/radiovisual/zaport.svg?branch=master)](https://travis-ci.org/radiovisual/zaport) :zap:

# ![zaport](media/screenshot.png)

**Note** This module is currently working for me on my mac, but it [needs unit tests](https://github.com/radiovisual/zaport/issues/2). I don't have time to write them right now, since they are a bit tricky and will take a little research. If you are willing to help out, pull requests are welcome. :sunglasses:   

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
	   -t, --tcp  only zap TCP activity (default)
	   -u, --udp  only zap UDP activity
	   -a, --all  zap all TCP/UDP activity

	 Examples
	   $ zaport 8010 -a
	   $ zaport 8010 --all
	   $ zaport 8010 -t
```

## License

MIT © [Michael Wuergler](http://numetriclabs.com)
