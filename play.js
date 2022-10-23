const { connect } = require("./client");
const { setupInput } = require("./input");

//starts the game
console.log("Connecting ...");
setupInput(connect());