# Multi-Pipe-Stream

A writable stream that can be piped to multiple other writable streams.

## Installation
```
npm i multi-pipe-stream -S
```

## Code Example
```js
var MultiStream = require('multi-pipe-stream');

// Create a new MultiStream
var stream = new MultiStream();

// Pipe the original stream to the MultiStream
originalStream.pipe(stream);

// Add multiple pipes out from this stream to multiple destinations
stream.pipeTo(destStream1);
stream.pipeTo(destStream2);

// Remove a destination stream from being piped to
stream.unpipeFrom(destStream1);
```
