var EventEmitter = require('events').EventEmitter,
    util = require('util');

function LineReader() {
  EventEmitter.call(this);
}
util.inherits(LineReader, EventEmitter);

LineReader.prototype.read = function(stream) {
  var self = this,
      line = '';

  stream.resume();
  stream.setEncoding('utf-8');

  stream.on('data', function(data) {
    if (data) {
      line += data;
      while (line.match(/\r?\n/)) {
        self.emit('line', RegExp.leftContext);
        line = RegExp.rightContext;
      }
    }
  });

  stream.on('end', function() {
    if (line) {
      self.emit('line', line);
    }
    self.emit('close');
  });

  stream.on('error', function(e) {
    self.emit('error', e);
  });
};

exports.LineReader = LineReader;