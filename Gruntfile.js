module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            t1: {
                files: {
                    'js/main.min.js': ['js/main.js']
                }
            }
        },

        cssmin: {
			options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
              },
              target: {
                files: {
                  'css/main.min.css': ['css/main.css', 'css/animate.css']
                }
              }
		}
    });


}