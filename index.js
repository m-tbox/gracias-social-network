const express = require('express');
const multer = require("multer");
const path = require("path");
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5002;

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/post");

app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, req.body.name);
    }
});
let upload = multer({ storage: storage })


app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
        return res.status(200).json("File uploded successfully");
    } catch (error) {
        console.error(error);
    }
});

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.use(express.static(path.join(__dirname, "client", "build")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => console.log(`Server running on port ${port}`));