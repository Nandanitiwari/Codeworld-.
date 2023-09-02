// streams are objects that let you read data from a source or write data to s destination in continuous fashion. In Node.js, there are four types of sstreams_

// Streaming means listening to music or watching video in 'real time'. instead of downloading a file to your computer and watching it later

//Readable  - Stream which is used for read doperation. 
//Writable - Stream which is used for write operation.
//Duplex - Stream which can be used for both read and write operation
//Transform = A type of sDuplex stream where the output is computed based on input.

//each type of stream is an EventEmitter instance and throws several events at different instamce of times. For example, some of the commonly used events are-

//Data - This event is fired when there is data available to read.
//End - This event is fired when there is no more data to read.
//error - This event is when there is any error receiving or writing data.
//finish - This event is fired when all the data has been flushed to underlying system


const fs = require('fs');
const http = require("http");

const server = http.createServer();

server.on('request', (req, res) => {

    // fs.readFile('input.txt', (error,data) => {
    //     if (error) return console.error(error);
    //     res.end(data.toString());
    // });


    // 2nd way 
    //Reading from a Stream 
    // Create a readable Stream
    // Handle Stream events ---> data , end , and error

    // const rstream = fs.createReadStream('inputs.txt');
    // rstream.on('data', (chunkdata) => {
    //     res.write(chunkdata);
    // });

    // rstream.on('end', () =>{
    //     res.end();
    // });

    // rstream.on('error', (error) => {
    //     console.log(error);
    //     res.end("file not found");
    // });

    //3rd way
     const rstream = fs.createReadStream('input.txt');
     rstream.pipe(res);

});

server.listen(9000, "127.0.0.1");