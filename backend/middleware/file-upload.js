const multer = require('multer');
const { v1: uuidv1 } = require('uuid');

//1. Upload into BACKEND using multer package.
const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg',
};

const fileUpload = multer({
  limits: 500000, //500kb = 500,000bytes;
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, 'uploads/images'); //uploads/images folder dotor image-ee hadgalna
    },
    filename: (req, file, callback) => {
      const extension = MIME_TYPE_MAP[file.mimetype];
      //uploads\images\88e1c4e0-4fac-11ed-bc74-794816005dfe.jpeg returns
      callback(null, uuidv1() + '.' + extension);
    },
  }),
  fileFilter: (req, file, callback) => {
    //!! = either true or false
    const isValid = !!MIME_TYPE_MAP[file.mimetype];
    let error = isValid ? null : new Error('invalid mime (extension) type');
    callback(error, isValid);
  },
});

module.exports = fileUpload;
//exported to "routes/users-route.js"

// MIME= Multipurpose Internet Mail Extensions
