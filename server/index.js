const express = require('express');
const app = express();
const port = process.env.PORT || 5002;

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/post");

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);


app.listen(port, () => console.log(`Server running on port ${port}`));