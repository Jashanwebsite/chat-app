import { io } from 'socket.io-client';
// simple Socket for getting one 1d
export const Socket = io('http://localhost:5000');
// export let socketID = '';
// Socket.on('connect', () => {
//     socketID = Socket.id
// })