const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');


const router = express.Router();




if(process.env.NODE_ENV === "development"){
  // const postRoutes = require("../src/routes/postRouter")
  // call this func when local server read ts file...
  // postRoutes(app)
} else {


  
  // call this lambda function
  const postRoutes = require("../dist/routes/postRouter")
  postRoutes(router) 
}


router.get('/', (req, res) => {
  res.send("hi")
});



app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda



module.exports = app;
module.exports.handler = serverless(app);