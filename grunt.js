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
      },
      compileUser: {
        files: ['coffee/routes/user.coffee'],
        dest: 'routes/user.js'
      },
      compileArticle: {
        files: ['coffee/routes/article.coffee'],
        dest: 'routes/article.js'
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
      },
      user: {
        files: 'coffee/routes/user.coffee',
        tasks: 'coffee:compileUser ok'
      },
      article: {
        files: 'coffee/routes/article.coffee',
        tasks: 'coffee:compileArticle ok'
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', 'coffee ok');

};