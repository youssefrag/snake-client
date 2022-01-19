let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'a') {
    connection.write('Move: left')
    // connection.write('Say: Go long')
  } else if (key === 's') {
    connection.write('Move: down')
    // connection.write('Say: Who the best')
  } else if (key === 'd') {
    connection.write('Move: right')
    // connection.write('Say: SNAKE KING')
  } else if (key === 'w') {
    connection.write('Move: up')
    // connection.write('Say: got nothing on me')
  }
}

module.exports = setupInput