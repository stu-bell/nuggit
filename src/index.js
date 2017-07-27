#!/usr/bin/env node
const xpath = require('xpath'),
xmldom = require('xmldom').DOMParser,
xmlserialize = require('xmldom').XMLSerializer,
fs = require('fs'),
R = require('ramda'),
sSourcePath = process.argv[2],
sTargetPath = R.defaultTo('.', process.argv[3]),
sEmptyNugg = '<?xml version="1.0" encoding="utf-16"?><nugget name="NAME"></nugget>',
sFileExtAbap = '.abap',
sFileExtNugg = '.nugg',
t = {
	msgFileLoaded: "Processing file: ",
	msgFileWritten: "File saved: "
};

// process the main source file
fs.readFile(sSourcePath, 'utf8', (err, data) => {

	// error handlign
	if (err) {
		throw err;
	}

	// log
	console.log(t.msgFileLoaded, sSourcePath);

	// parse
	var oDoc = new xmldom().parseFromString(data, 'application/xml');

	// select nodes
	aNodes = xpath.select("//CLAS", oDoc);

	// process each selected node
	R.map(oNode => {
		// add contents to new nugget
		var oNugg = new xmldom().parseFromString(sEmptyNugg, 'application/xml');
		// assume the nugget node is the first childnode
		oNugg.childNodes[1].appendChild(oNode);
		// serialize node to XML string
		var sXML = new xmlserialize().serializeToString(oNugg),
		// TODO: check path exists, create if not
		// use objectname from as filename
		sPath = R.join('/', [sTargetPath, oNode.getAttribute("CLSNAME") + sFileExtNugg]);

		// write to file
		fs.writeFile(sPath, sXML, err => {
			if(err) {
				throw err;
			}
			console.log(t.msgFileWritten, sPath);
		});
	}, aNodes);

});
