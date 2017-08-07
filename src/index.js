#!/usr/bin/env node
const xpath = require('xpath'),
xml = require('simple-xml-dom'),
fs = require('fs'),
flags = require('node-flags'),
R = require('ramda'),
S = require('./scb-helper'),

log = console.log,
logNames = R.map(x => log(S.getObjectName(x))),

sSourcePath = process.argv[2],
sTargetPath = R.defaultTo('.', process.argv[3]),
sEmptyNugg = '<?xml version="1.0" encoding="utf-16"?><nugget name="NAME"></nugget>',
sFileExtAbap = '.abap',
sFileExtNugg = '.nugg',
t = {
	msgFileLoaded: "Processing file: ",
	msgFileWritten: "File saved: ",
	msgFileContents: "Files in nugget: "
};

// process the main source file
fs.readFile(sSourcePath, 'utf8', (err, data) => {

	// error handlign
	if (err) {
		throw err;
	}

	// log
	log(t.msgFileLoaded, sSourcePath);

	// parse
	var oDoc = xml.parse(data);

	// select nodes
	aNodes = xpath.select("(/nugget/CLAS|/nugget/PROG)", oDoc);

	// process based on user settings TODO: figure out how to arrange this properly - as options become more complicated, don't want to have a huge complicated nested if statement...
	if(flags.get('list')) {
		// just output a list of nodes
		log(t.msgFileContents);
		logNames(aNodes);
	} else {
		// split each node into its own nugg file
		R.map(oNode => {
			// add contents to new nugget
			var oNugg = xml.parse(sEmptyNugg);
			// add node to nugg
			S.nuggAdd(oNugg, [oNode]);
			// serialize node to XML string
			var sXML = xml.serialize(oNugg),
			// TODO: check path exists, create if not
			// use objectname from as filename
			sPath = S.jPath(sTargetPath, S.getObjectName(oNode) + sFileExtNugg);
			// write to file
			// TODO: warning if overwriting file
			fs.writeFile(sPath, sXML, err => {
				if(err) {
					throw err;
				}
				log(t.msgFileWritten, sPath);
			});
		}, aNodes);

	}

});
