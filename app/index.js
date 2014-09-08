'use strict';

var yeoman = require('yeoman-generator');
var fs = require('fs');
var ncp = require('ncp').ncp;
ncp.limit = 16;

var GeneratorPtf = yeoman.generators.Base.extend({
	files: function() {
		//this.sourceRoot = this.sourceRoot();
		ncp(this.sourceRoot(), '.', function (err) {
 			if (err) {
   				return console.error(err);
 			}
			fs.readdir('.', function(err, files) {
				if (err) throw err;
				files.forEach(function(file) {
					if(file.indexOf('DOT') !== -1) {
						fs.rename(file, file.replace('DOT', '.'), function(err) {
							if (err) throw err;
						});
					}
				});
			});
		});
	}
});

module.exports = GeneratorPtf;