

module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        watch: {
            css: {
                files: [
                    'sass/*.scss'
                ],
                tasks: ['compass']
            },
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    outputStyle: 'expanded'
                }
            }
        },
        browserSync: {
            files: {
                src: [
                    'css/*.css',
                    '*.html'
                ],
            },
            options: {
                server: {
                    baseDir: "./"
                },

                watchTask: true
            }

        }

    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['browserSync', 'watch']);

};