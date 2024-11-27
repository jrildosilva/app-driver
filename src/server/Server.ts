import express  from "express";


const server = express();

server.get('/', (-, res ) => {
 return res.send('ola, Dev!');
});

export { server };