import mongoose from 'mongoose';
import bluebird from 'bluebird';

// connect to mongoodb

let connectDB = () => {
  mongoose.Promise = bluebird;
  let URI = 'mongodb://localhost:27017/webChat';

  return mongoose.connect(URI, {useMongoClient: true});
};

module.exports = connectDB;