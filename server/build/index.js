"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const dotenv_1 = __importDefault(require("dotenv"));
const auth_1 = __importDefault(require("./routes/auth"));
const users_1 = __importDefault(require("./routes/users"));
const posts_1 = __importDefault(require("./routes/posts"));
dotenv_1.default.config();
app.use(express_1.default.json());
app.use('/images', express_1.default.static(path_1.default.join(__dirname, '/images')));
const mongoose = require('mongoose');
mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});
const upload = (0, multer_1.default)({ storage: storage });
app.post('/server/upload', upload.single('file'), (req, res) => {
    res.status(200).json('file has been uploaded');
});
app.use('/server/auth', auth_1.default);
app.use('/server/users', users_1.default);
app.use('/server/posts', posts_1.default);
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('server running');
});
app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT} on port ${PORT}`);
});
