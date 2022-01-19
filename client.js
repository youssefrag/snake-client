const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  })

  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Successfully connected to game server')
    conn.write('Name: YMR')
    // setTimeout(() => {
    //   conn.write('Move: up')
    // }, 5000);
  })

  conn.on('data', () => {
    console.log('you ded cuz you idled')
  })

  return conn;
};

module.exports = connect