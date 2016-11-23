

module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        watch: {
            sass: {
                files: "assets/sass/**/*.scss",
                tasks: ['sass']
            },
        },
        // SASS task config
        sass: {
            dist: {
                files: {
                    // destination          // source file
                  'assets/css/main.css': 'assets/sass/main.scss',
                  'assets/css/ie8.css': 'assets/sass/ie8.scss',
                  'assets/css/ie9.css': 'assets/sass/ie9.scss'
                }
            }
        },

    browserSync: {
        default_options: {
            bsFiles: {
            
                    src: [
                        'assets/css/*.css',
                        '*.html'
                    ]
            },
                options: {
                    server: {
                        baseDir: "./"
                    },

                    watchTask: true
                }

            }
        }
    

    });

    grunt.loadNpmTasks('grunt-contrib-sass')
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['browserSync', 'watch', 'sass']);

};