'use strict'

module.exports = function(grunt) {

	//Load all grunt tasks
	require('load-grunt-tasks')(grunt, {
		pattern: 'grunt-*'
	});

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			css: {
				files: ['./stylus/**/*.styl', './css/*.css'], 
				tasks: ['stylus'],
				options: {
					livereload: true
				}

			}
		},

		stylus: {
			options: {
				use: [require('nib')]
			},
			compile: {
				options: {
					paths: ['./stylus/**/*.styl'],
					'include css': true,
				},
				files: {
					'./css/style.css': './stylus/main.styl'
				}
			}
		},
	});

	// Register Tasks
	grunt.registerTask('default', ['watch']);
}