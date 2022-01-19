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
    // conn.write('Say: go long')
    // setTimeout(() => {
    //   conn.write('Move: up')
    // }, 5000);
  })

  return conn;
};

module.exports = connect