const multer = require('multer');
const path = require('path');

// Define storage options
const storage = multer.memoryStorage();

// Initialize multer with storage options
const upload = multer({ storage });

module.exports = upload;
