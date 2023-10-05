const http=require('http');
const app=require('./app');

const server=http.createServer(app);

server.listen(5100,console.log('Server started'));