var _config = {
    "locales":			["it","en","pl"],

	"defaultLocale": 	"pl",
	"company": {
		"logo":	"/logo.png",
		"name":	"Nazwa",
		"row1":	"Nazwa 2",
		"row2":	"Nazwa 3"
	},
	"banks":[
		["BANK informacje"]
	],
	"currency":			["zł"],
	"vat_perc":	22,
	"accountingSettings":{
		"currency": {
			"symbol" : "",		// default currency symbol is "$"
			"format": "%v",		// controls output: %s = symbol, %v = value/number (can be object: see below)
			"decimal" : ",",	// decimal point separator
			"thousand": ".",	// thousands separator
			"precision" : 2		// decimal places
		},
		"number": {
			"precision" : 2,	// default precision on numbers is 0
			"thousand": ".",
			"decimal" : ","
		}
	},
	"roles":{
		"admin": {
			"display_name" : "Administrator",
			"admin" : true,
			"write": true,
			"read" : true
		},
		"editor": {
			"display_name" : "Editor",
			"admin" : false,
			"write": true,
			"read" : true
		},
		"viewer": {
			"display_name" : "Viewer",
			"admin" : false,
			"write": false,
			"read" : true
		}
	},
	"googleAnalytics": "",
	"emailDispatcher": {
		"host"			: 'smtp.gmail.com',
		"user" 			: '',
		"password" 		: '',
		"sendername"	: '',
		"senderemail"	: ''
	}
}
if (typeof exports !== "undefined") exports._config = _config;
//if (GLOBAL) GLOBAL._config = _config;
//console.log(GLOBAL._config);
