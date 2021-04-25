const util = require("util");
const multer = require("multer");
const maxSize = 5e7; // 50mb
const uuidv4 = require("uuid");
console.log("Mac File size: ", maxSize);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/uploads/");
  },
  filename: (req, file, cb) => {
    const newFileName = uuidv4() + "_" + file.originalname;
    console.log(newFileName);
    cb(null, newFileName);
  },
});

const uploadFile = multer({
  storage,
  limits: { fileSize: maxSize },
}).single("file");

const uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
