/*npm install --save-dev express@4.16.3
npm install --save-dev connect-history-api-fallback@1.5.0
npm install --save-dev https@1.0.0
 uses the
newly added package s to create an HTTP and HTTPS server that includes the json-server functionality that
will provide the RESTful web services*/
const express = require("express");
const https = require("https");
const fs = require("fs");
const jsonServer = require("json-server");
const bodyParser = require('body-parser');
const auth = require("./authMiddleware");
const router = jsonServer.router("serverdata.json");


const enableHttps = true;
const ssloptions = {}

if (enableHttps) {
  ssloptions.cert = fs.readFileSync("./ssl/sportsstore.crt");
  ssloptions.key = fs.readFileSync("./ssl/sportsstore.key");
}
const app = express();
app.use(bodyParser.json());
app.use(auth);
app.use("/api", router);
app.use("/", express.static("./dist/SportsStore"));
app.listen(80,
  () => console.log("HTTP Server running on port 80"));
if (enableHttps) {
  https.createServer(ssloptions, app).listen(443,
    () => console.log("HTTPS Server running on port 443"));
} else {
  console.log("HTTPS disabled")
}
