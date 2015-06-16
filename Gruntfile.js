module.exports = function(grunt) {
 	grunt.initConfig({
 		pkg: grunt.file.readJSON('package.json'),
		sass: {
		  dist: {
		    options: {
		      style: 'expanded',
		      require: 'susy'
		    },
		    files: {
		        'src/scss/style.css': 'src/scss/style.scss'
		    }
		  }
		},
		watch: {
			css: {
				files: 'src/scss/*.scss',
				tasks: ['sass']
			}
		}
 	});
	// Default tasks
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');	
	grunt.registerTask('default', ['watch']);
 };
