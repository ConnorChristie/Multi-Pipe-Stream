var Writable = require('stream').Writable;
var inherits = require('inherits');
var _ = require('underscore');

function MultiStream() {
    Writable.call(this);

    this.streams = [];
};

inherits(MultiStream, Writable);

MultiStream.prototype._write = function (buf, encoding, callback) {
    this.streams.forEach(function (stream) {
        stream.write(buf);
    });

    callback();
};

MultiStream.prototype.pipeTo = function (stream) {
    this.streams.push(stream);
}

MultiStream.prototype.unpipeFrom = function (stream) {
    this.streams = _.without(this.streams, stream);
}

module.exports = MultiStream;
