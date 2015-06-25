/// <reference path="../../typings/tsd.d.ts" />

// import deps
var static = require('node-static');	// serves static files
var http = require('http'); 		// default node http server
var port = 1337;					// as per ./.settings/settings.json

// serve all files in ./bin
var file = new static.Server( 'bin', { 
	cache:0,
	gzip:true
 })

// start server
http.createServer( function(req, resp) {
	req.addListener('end', function() {
		file.serve(req, resp);
	}).resume();
}).listen( port );