require('dotenv').config();
module.exports = {
  mongoURI: `mongodb://${process.env.ip-192-168-0-11.ap-south-1.compute.internal}:${process.env.27017}/${process.env.webelight}`,
  redisPort: process.env.8001,
  redisHost: process.env.ip-192-168-0-11.ap-south-1.compute.internal
};
