const fs = require('fs');
const zlib = require('zlib');

const readableStream = fs.createReadStream('./index.html', {
    encoding: 'utf8',
    highWaterMark: 1024,
});

const writableStream = fs.createWriteStream('output.txt');

const gzip = zlib.createGzip();

// readableStream.on('data', function(chunk) {
//     console.log('NEW CHUNK HERE');
//     writableStream.write(chunk);
// });

// readableStream.on('end', () => {
//     console.log('STREAM ENDED');
//     writableStream.end();
// })

readableStream.pipe(gzip).pipe(writableStream);

