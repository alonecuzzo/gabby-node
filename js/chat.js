// Generated by CoffeeScript 1.4.0
(function() {
  var Client, clients, net, server;

  net = require('net');

  Array.prototype.remove = function(element) {
    var e, i, _i, _len;
    for (i = _i = 0, _len = this.length; _i < _len; i = ++_i) {
      e = this[i];
      if (e === element) {
        return this.splice(i, 1);
      }
    }
  };

  Client = (function() {

    function Client(stream) {
      this.stream = stream;
      this.name = null;
    }

    return Client;

  })();

  clients = [];

  server = net.createServer(function(stream) {
    var client;
    client = new Client(stream);
    clients.push(client);
    stream.setTimeout(0);
    stream.setEncoding("utf8");
    stream.addListener('connect', function() {
      return stream.write('Welcome, enter your username:\n');
    });
    stream.addListener('data', function(data) {
      var c, command, matched, _i, _j, _k, _len, _len1, _len2, _results;
      if (client.name === null) {
        client.name = data.match(/\S+/);
        stream.write('===========\n');
        for (_i = 0, _len = clients.length; _i < _len; _i++) {
          c = clients[_i];
          if (c !== client) {
            c.stream.write(client.name + " has joined.\n");
          }
        }
        return;
      }
      matched = data.match(/^\/(.*)/);
      if (matched && matched.length > 1) {
        command = matched[1];
        if (command === 'users') {
          for (_j = 0, _len1 = clients.length; _j < _len1; _j++) {
            c = clients[_j];
            stream.write("- " + c.name + "\n");
          }
        } else if (command === 'quit') {
          stream.end();
        }
        return;
      }
      _results = [];
      for (_k = 0, _len2 = clients.length; _k < _len2; _k++) {
        c = clients[_k];
        if (c !== client) {
          _results.push(c.stream.write(client.name + ": " + data));
        }
      }
      return _results;
    });
    return stream.addListener('end', function() {
      var c, _i, _len;
      clients.remove(client);
      for (_i = 0, _len = clients.length; _i < _len; _i++) {
        c = clients[_i];
        c.stream.write(client.name + " has left this room.\n");
      }
      return stream.end();
    });
  });

  server.listen(7000);

}).call(this);