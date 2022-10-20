const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '172.24.213.35',
    port:  50541,
  });
  conn.on("data", () => {
    console.log("you ded cuz you idled")
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect