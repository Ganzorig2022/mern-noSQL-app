const fs = require('fs'); //built-in filesystem node-js module
const path = require('path'); //built-in path node-js module
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error');

const app = express();

//middleware
app.use(bodyParser.json());

//middleware for image. express.static returns requested file from
//"./uploads/images" folder
app.use('/uploads/images', express.static(path.join('uploads', 'images')));

//==========================1) DEPLOY both back end front end======================
// 1) commented out codes in row 41-43, 25-35. Because no longer needed in production. Only used for development
app.use(express.static(path.join('public')));

//cors error
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//   );

//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

//   next();
// });

//routes
app.use('/api/places', placesRoutes);
app.use('/api/users', usersRoutes);

//==========================2) DEPLOY both back end front end======================
app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

//handling error for unsupperted routes
// app.use((req, res, next) => {
//   const error = new HttpError('Could not find this route.', 404);
//   throw error;
// });

//GENERAL ERROR HANDLER
app.use((error, req, res, next) => {
  //roll back image upload if signup request is failed. Maybe user already exists then no need to save image upload!!!
  if (req.file) {
    //delete image from "uploads/images"
    fs.unlink(req.file.path, (err) => {
      // console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

//connect returns promise. Env variables imported from "nodemon.json"
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.wq4zahi.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(process.env.PORT || 5000);
  })
  .catch((err) => {
    console.log(err);
  });
//connecting
