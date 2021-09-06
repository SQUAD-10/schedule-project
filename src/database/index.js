const mongoose = require('mongoose');
require('dotenv/config');

main().catch(err => console.log(err));

async function main () {
  await mongoose.connect(process.env.DB_CONNECTION, () => console.log('DB CONNECTED'));
}

module.exports = mongoose;
