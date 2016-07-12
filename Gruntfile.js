module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          sourceMap: true
        },
        files: {
          'assets/css/styles.css' : 'assets/css/styles.scss'
        }
      }
    },

    uglify: {
      build: {
        files: {
          'assets/js/global.min.js' : ['assets/js/*.js', '!assets/js/global.min.js']
        }
      }
    },

    htmlhint: {
      html1: {
        options: {
          'tag-pair': true,
          'doctype-first': true,
          'src-not-empty': true,
          'id-unique': true,
          'attr-lowercase': true,
          'tagname-lowercase': true
        },
        src: ['*.html']
      }
    },

    watch: {
      css: {
        files: 'assets/css/**/*.scss',
        tasks: ['sass']
      },
      js: {
        files: ['assets/js/*.js', '!assets/js/global.min.js'],
        tasks: ['uglify']
      },
      html: {
        files: '*.html',
        tasks: ['htmlhint']
      }
    },
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-htmlhint');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('pass', ['sass','uglify','htmlhint']);
}
