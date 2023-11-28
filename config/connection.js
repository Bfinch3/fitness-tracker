const { connect, connection } = require('mongoose');
const connectionString =
  process.env.MONGODB_URI || 'mongodb+srv://root:root@cluster0.jtey2ed.mongodb.net/';

connect(connectionString);
module.exports = connection;


