import express from 'express';
import morgan from 'morgan';
import { Server as SocketServer } from 'socket.io';
import http from 'http';
import cors from 'cors';
import { PORT } from './config.js';


const app = express();

const server = http.createServer(app);

// por medio del socket estoy dando permisos al origin de mi client
const io = new SocketServer(server, {
  cors: {
    origin: "http://localhost/5173"
  }
});

app.use(cors());
app.use(morgan('dev'));

// método que puede ejecutarse eventualmente
io.on('connection', (socket) => {
  console.log(socket.id);
  console.log('User conected');
});



server.listen(PORT);
console.log("Server started on port: "+PORT);