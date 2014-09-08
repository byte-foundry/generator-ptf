'use strict';

var yeoman = require('yeoman-generator');
var fs = require('fs');

var GeneratorPtf = yeoman.generators.Base.extend({
	method : function() {
		console.log('Welcome to ptf generator');
		fs.mkdir('src', function(err) {
			if (err) throw err;
			fs.mkdir('src/glyphs', function(err) {
				if (err) throw err;
			});
			fs.open('src/glyphs/a-cap.coffee', 'w+', function(err) {
				if (err) throw err;
			});
			fs.open('src/parameters.js', 'w+', function(err) {
				if (err) throw err;
			});
			fs.open('src/presets.js', 'w+', function(err) {
				if (err) throw err;
			});
			fs.open('src/typeface.js', 'w+', function(err) {
				if (err) throw err;
			});
			fs.createReadStream('app/package_template.json').pipe(fs.createWriteStream('package.json'));
		});
	}
})

module.exports = GeneratorPtf;
