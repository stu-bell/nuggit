#!/usr/bin/env node
var xpath = require('xpath'),
	xdom = require('xmldom'),
	fs = require('fs'),
	sSourcePath = process.argv[2];

console.log(sSourcePath);

fs.readFile(sSourcePath, 'utf8', (err, data) => {

	console.log(data);
});
