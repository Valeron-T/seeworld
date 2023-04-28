const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes");
const AppError = require("./utils/appError");
const errorHandler = require("./utils/errorHandler");

app.use(cors());
app.use(express.json());
app.use('/', router);

// app.all("*", (req, res, next) => {
//  next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
// });

// app.use(errorHandler);

const hostname = '127.0.0.1';
const PORT = 3000;

app.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
});

module.exports = app;