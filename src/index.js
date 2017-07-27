#!/usr/bin/env node
const xpath = require('xpath'),
xmldom = require('xmldom').DOMParser,
xmlserialize = require('xmldom').XMLSerializer,
fs = require('fs'),
R = require('ramda'),
sSourcePath = process.argv[2],

t = {
	msgProcessingFile: "Processing file: "
};

// log
console.log(t.msgProcessingFile, sSourcePath);

// process the main source file
fs.readFile(sSourcePath, 'utf8', (err, data) => {
var R = require('ramda'); // for debugging only -

	// error handlign
	if (err) {
		throw err;
	}

	// parse
	var oDoc = new xmldom().parseFromString(data, 'application/xml'),

	// select nodes
	aNodes = xpath.select("//CLAS", oDoc);

	// process each selected node
	R.map(oNode => {
		// serialize node to XML string
		var sXML = new xmlserialize().serializeToString(oNode);
		// write to file
		console.log(sXML);
	}, aNodes);

});
