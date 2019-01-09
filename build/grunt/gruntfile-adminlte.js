module.exports = function(grunt) {
     
    grunt.initConfig({
 
        pkg: grunt.file.readJSON('package.json'),
 
        meta: {
            //basePath: '../'
        },
         
        concat: {
            options: {
                stripBanners: true,
                separator: ';'
            },
            dist: {
                src: [
                        '../../plugins/eb-smallbox.js',
                        '../../classes/eb-adminlte-template.js'
                ],
                dest: '../lib/eb-adminlte.js'
            }
        },
        
        uglify: {
          options: {
            banner: '/* <%= pkg.description %> ' +
                '(<%= grunt.template.today("yyyy-mm-dd") %>) ' +
                '(c) 2014 - <%= grunt.template.today("yyyy") %> Enterprise Blocks, Inc. ' +
                'License details : <%= pkg.license %> */'
            },
            dist: {
            files: {
                '../lib/eb-adminlte.min.js': ['../lib/eb-adminlte.js']
            }
          }
        }
        
    });
 
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('default', ['concat', 'uglify']);
 
};