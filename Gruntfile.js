module.exports = grunt => {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    eslint: {
      files: {
        expand: true,
        src: 'src/**/*.js'
      }
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015', 'stage-0'],
        plugins: ['add-module-exports']
      },
      files: {
        expand: true,
        cwd: 'src',
        src: '**/*.js',
        dest: 'dist'
      }
    },
    watch: {
      scripts: {
        files: ['src/**/*.js'],
        tasks: ['lint', 'babel'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.registerTask('lint', ['eslint']);
  grunt.registerTask('default', ['watch']);
};
