const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
console.log(app);

app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.listen(3000, () => {
    console.log("Server started on port 3000");
});