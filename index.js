const express = require('express');
const app = express();

const mongoose = require('mongoose');
const { MONGO_ID, MONGO_USER, MONGO_PASSWORD, MONGO_PORT } = require('./config/mongo.config');

const port = process.env.PORT;
const RETRY_TIME = 5000;
console.log(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_ID}:${MONGO_PORT}/?authSource=admin`);

const connectWithRetry = () => {
  mongoose
  .connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_ID}:${MONGO_PORT}/?authSource=admin`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then( () => console.log("Connect Success into mongo"))
  .catch( err => {
    console.log(" Connect Mongo Error: ",  err)
    setTimeout(connectWithRetry, RETRY_TIME)
  })
}

connectWithRetry();


app.get('/', (req, res) => {
  res.send('Hello World 1');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})