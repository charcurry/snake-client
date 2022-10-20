// setup interface to handle user input from stdin
// Stores the active TCP connection object.
const { moveUpKey, moveDownKey, moveLeftKey, moveRightKey, exitKey } = require("./constants");
  let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (input) {
 if (input === exitKey) {
  process.exit()
 } else if (input === moveUpKey) {
  connection.write("Move: up")
 } else if (input === moveLeftKey) {
  connection.write("Move: left")
 } else if (input === moveDownKey) {
  connection.write("Move: down")
 } else if (input === moveRightKey) {
  connection.write("Move: right")
 }

 let messages = {
 '\u0067': "Say: GG",
 '\u0065': "Say: Eat my dust",
 '\u0071': "Say: LOL",
 '\u0074': "Say: Thanks!",
 '\u0066': "Say: Hello"
} 

if (messages.hasOwnProperty(input)) {
  connection.write(messages[input])
 }
};

module.exports = { setupInput }