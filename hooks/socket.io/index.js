// module.exports = strapi => {
//   return {
//     async initialize() {

//       const ioServer = require('socket.io')(strapi.server, {
//         cors: {
//           origin: "http://localhost:3000",
//           methods: ['GET', 'POST'],
//           /* ...other cors options */
//         }

//       }
//       )

//       ioServer.on('connection', function(socket) {
//         socket.emit('hello', `Welcome ${socket.id}`);
//         console.log(`Socket ${socket.id} connected`);
//       })

//       /* HANDLE CLIENT SOCKET LOGIC HERE */

//      // store the server.io instance to global var to use elsewhere
//       strapi.services.ioServer = ioServer
//     },
//   }
// }



// module.exports = (strapi) => {
//   return {
//     async initialize() {

//       process.nextTick(() => {
//         const ioServer = require("socket.io")(strapi.server, {
//           cors: {
//             origin: "http://localhost:3000",
//             methods: ["GET", "POST"],
//             /* ...other cors options */
//           },
//         });

//         ioServer.on("connection", function (socket) {
//           socket.emit("hello", `Welcome ${socket.id}`);
//           console.log(`Socket ${socket.id} connected`);
//         });

//         /* HANDLE CLIENT SOCKET LOGIC HERE */

//         // store the server.io instance to global var to use elsewhere
//         strapi.services.ioServer = ioServer;
//       });
//     },
//   };
// };







