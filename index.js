const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const multer = require('multer')
const hbs = require('hbs');
const expressHandlebars = require('express-handlebars');
const mongoose = require('mongoose');
const port = process.env.PORT|| 5000;
const server = http.createServer(app);
const fs = require('fs')
const publicPath = path.join(__dirname, '/public');


app.use(express.static(publicPath))


server.listen(port,()=> {
  console.log(`Server running successfully at the port ${port}`);

});