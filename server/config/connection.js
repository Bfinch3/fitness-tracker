const { connect, connection } = require('mongoose');
const connectionString =
  process.env.MONGODB_URI || 'mongodb+srv://root:root@cluster0.g9jtpgl.mongodb.net/';
connect(connectionString);
module.exports = connection;


