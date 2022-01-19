const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
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