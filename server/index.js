// const express = require("express");
// const app = express();
// const cors = require("cors");

// app.use(cors());
// console.log(app);

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });


// app.listen(3000, () => {
//     console.log("Server started on port 3000");
// });

// server/index.js

const express = require('express');
const app = express();
const cors = require('cors');
// Middlewares
app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    // res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    next();
});

// Import each handler's router
const bookingRoutes = require('./BookingHandler/app');
const employeeRoutes = require('./EmployeeHandler/app');
const roomRoutes = require('./RoomHandler/app');

// Mount them under different base paths
app.use("/", bookingRoutes);
app.use("/", employeeRoutes);
app.use("/", roomRoutes);

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
    console.log(`Unified server running at http://localhost:${PORT}`);
});
