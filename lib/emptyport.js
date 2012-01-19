var net = require('net');

/**
 * Find empty port.
 *
 * @param callback function(err, port)
 */
exports.emptyPort = function(callback) {
  var port = 10000 + Math.floor(Math.random() * 1000),
      server = new net.Server();

  server.on('error', function(e) {
    if (e.code === 'EADDRINUSE') {
      server.close();
      loop();
    } else {
      callback(e);
    }
  });

  function loop() {
    if (port++ >= 20000) {
      callback(new Error('Empty port not found'));
      return;
    }

    server.listen(port, '127.0.0.1', function() {
      server.close();
      callback(null, port);
    });
  };
  loop();
};