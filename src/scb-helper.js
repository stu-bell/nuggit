var R = require('ramda');

var S = {
	nuggAdd: (oNugg, aNodes) => R.map(oNode => oNugg.childNodes[1].appendChild(oNode), aNodes)	// assume the nugget node is the first childnode
};

module.exports = S;
