const net = require("net");
const { IP, PORT, playerName } = require("./constants");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);
  });
  //connect message
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  });
  //writes players name on connect
  conn.on("connect", () => {
    conn.write(`Name: ${playerName}`);
  });
  return conn;
};

module.exports = { connect };

//   conn.on("connect", () => {
//     setInterval(() => {
//       conn.write("Move: up");
//     }, 50)
//   });



