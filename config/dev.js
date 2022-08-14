require('dotenv').config();
module.exports = {
  mongoURI: `mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb:${process.env.27017}/${process.env.webelight}`,
  redisPort: process.env.8001,
  redisHost: process.env.ip-192-168-0-11.ap-south-1.compute.internal
};
