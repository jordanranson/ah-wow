module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["."],
                    yuicompress: true
                },
                files: {
                    "./app/public/style.css": "./less/master.less"
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions']
            },
            dist: {
                files: {
                    './app/public/style.css': ['./app/public/style.css']
                }
            }
        },
        watch: {
            files: ['./less/*','./less/**/*'],
            tasks: ['less', 'autoprefixer']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default','watch');
    grunt.registerTask('build',['less','autoprefixer']);
};