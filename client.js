const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '172.24.213.35',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data)
  }); 
  conn.on('connect', () => {
    console.log("Successfully connected to game server")
  });
  conn.on("connect", () => {
    conn.write("Name: CRC");
  });
  return conn;
};

module.exports = { connect }

//   conn.on("connect", () => {
//     setInterval(() => {
//       conn.write("Move: up");
//     }, 50)
//   });



