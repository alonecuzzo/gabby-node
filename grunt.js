/**
 * grunt
 * CoffeeScript example
 */
module.exports = function(grunt){

  grunt.initConfig({
    coffee: {
      compileChat: {
        files: [ 'coffee/chat.coffee' ],
        dest: 'js/chat.js'
      }
    },
    watch: {
      chat: {
        files: 'coffee/**/*.coffee',
        tasks: 'coffee:compileChat ok'
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', 'coffee ok');

};