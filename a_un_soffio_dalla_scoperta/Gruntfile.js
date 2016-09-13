module.exports = function (grunt) {

    grunt.initConfig({

        ngtemplates: {
            c4app: {
                src: ["partials/*.html"],
                dest: "js/templates.js",
                options: {
                    url: function (url) {
                        return url; //'/' + 
                    }
                }
            }
        },
        
    });

    grunt.loadNpmTasks('grunt-angular-templates');

    grunt.registerTask('default', [
        'ngtemplates'
        ]);

};
