/*
 * grunt-CsvToL10nJson
 * https://github.com/endorama/grunt-CsvToL10nJson
 *
 * Copyright (c) 2015 Edoardo Tenani
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Configuration to be run (and then tested).
    CsvToL10nJson: {
      main: {
        files: {
          'languages': 'languages/newindex.csv'
        }        
      }
    },


    browserSync: {
        dev:{
            bsFiles: {
                src : [
                    '*', 
                    'css/*.css', 
                    'js/*', 'views/**/*'
                    ]
            },
            options: {
                server: {
                    baseDir: "./",
                },
                open: false
            }
        }
    },




    svgstore: {
      options: {
        prefix: 'egizio-',
        svg: { // will add and overide the the default xmlns="http://www.w3.org/2000/svg" attribute to the resulting SVG
          //viewBox : '0 0 100 100',
          xmlns: 'http://www.w3.org/2000/svg',
          id: 'svgstore'
        },
        formatting: {
          indent_size: 2
        },
        includedemo: true
      },
      default: {
        files: {
          'newasset/all_icons.svg': ['newasset/svg/*.svg'],
        }
      }
    },


    useminPrepare:{
        html: '_index.html',
        options: {
            dest: './'
        }
    },

    usemin: {
        html: ['index.html']
    },



    copy: {
      main:{
          src: '_index.html',
          dest: 'index.html'
      },
      assets:{
          src: [
            'css/*.min.css', 
            'js/*.min.js', 
            'newmodules/*', 
            'newasset/**/*', 
            'languages/newindex-it.json', 
            'languages/newindex-en.json'
          ],
          dest: 'mobile/',
          expand:true
      },
      last:{
          src: ['index.html', 'newcredits.html',
            "angularjs/polyglot/lib/polyglot.js",
            "angularjs/jsurl/url.js",
            "angularjs/scrollReveal.js/dist/scrollReveal.min.js",
            "angularjs/it-cookie-law/dist/it-cookie-law.js",
            "js/new/breakpoints.js",
            "js/new/creditsScript.js",
            "js/new/desktop_only.js",
            "js/new/l10n.js"
          ],
          dest: 'mobile/',
          expand:true
      }
    },

    uglify:{
        generated: {
            mangle: true, // invert for debug
            beautify: false,  // invert for debug
            sourceMap: true // generated source maps for debug
        }
    },


    autoprefixer: {
        single_file: {
            src: '.tmp/concat/css/app.min.css',
            dest: '.tmp/concat/css/app.min.css'
        }
    },

    clean:{
        dist:{
            src: ['index.html', 'css/app.min.css', 'js/app.min.js']
        },
        tmp:{
            src: ['.tmp']
        }
    },


    processhtml: {
        options: {
            commentMarker: 'process'
        },
        mobile:{
            files:{
                'mobile/index.html': ['mobile/index.html']
            }
        },
        desktop:{
            files:{
                'index.html': ['index.html']
            }
        }
    },



    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                 
          'index.html': 'index.html',    
          'mobile/index.html': 'mobile/index.html'
        }
      }
    },

/*
    rev: {
      dist: {
        files: {
          src: [
            'css/app.min.css',
            'js/app.min.js'
          ]
        }
      }
    },

    filerev: {
      dist: {
        files: {
          src: [
            'css/app.min.css',
            'js/app.min.js'
          ]
        }
      }
    }
*/

  });

  grunt.loadNpmTasks('grunt-CsvToL10nJson');

  grunt.registerTask('default', [ 'CsvToL10nJson' ]);

  grunt.loadNpmTasks('grunt-svgstore');
  grunt.registerTask('svgs', [
    'svgstore'
  ]);

  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  //grunt.loadNpmTasks('grunt-rev');

  grunt.registerTask('build', [
  'clean:dist', 
  'svgs',
  'copy:main', 
  'useminPrepare', 
  'concat', 
  'autoprefixer', 
  'cssmin', 
  'uglify', 
  //'rev',
  'usemin', 
  'copy:assets', 
  'copy:last',
  'processhtml', 
  'htmlmin',
  'clean:tmp' // comment for debug
  ]);

  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.registerTask('dev', ['browserSync:dev']);


};