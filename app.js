const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const cors = require('cors');

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies (needed for base64 input if needed later)
app.use(express.json({ limit: '5mb' })); // Increase limit if needed

// Storage engine for multer
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000 // 1MB file size limit
    }
});

// Expose images serving static content
app.use('/file', express.static('upload/images'));

// Upload route that always responds with the file, here we are uploading single file
app.post('/upload', upload.single('file'), (req, res) => {
    res.json({
        success: 1,
        url: `http://localhost:4000/file/${req.file.filename}`
    });
});

// Error handling middleware
function errorHandler(err, req, res, next) {
    if (err instanceof multer.MulterError) {
        res.status(500).json({
            success: 0,
            message: err.message
        });
    } else {
        next(err);
    }
}

app.use(errorHandler);

// Start the server
app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
