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
      },
      compileMongo: {
        files: [ 'coffee/mongo.coffee'],
        dest: 'js/mongo.js'
      }
    },
    watch: {
      chat: {
        files: 'coffee/chat.coffee',
        tasks: 'coffee:compileChat ok'
      },
      mongo: {
        files: 'coffee/mongo.coffee',
        tasks: 'coffee:compileMongo ok'
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', 'coffee ok');

};