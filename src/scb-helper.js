var R = require('ramda');

var S = {
	nuggAdd: (oNugg, aNodes) => R.map(oNode => oNugg.childNodes[1].appendChild(oNode), aNodes),	// assume the nugget node is the first childnode
	getNameAttribute: R.cond([
		[R.propEq('nodeName', 'CLAS'), R.always('CLSNAME')],
		[R.propEq('nodeName', 'PROG'), R.always('NAME')],
		[R.T, R.always('NAME')] // else try NAME
	]) // looks up the type of a node, returns the key of the attribute containing the ABAP object name
};
S.getObjectName = oNode => oNode.getAttribute(S.getNameAttribute(oNode));

module.exports = S;
