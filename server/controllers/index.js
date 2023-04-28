const AppError = require("../utils/appError");
const conn = require("../services/db");

exports.getAllDestinations = (req, res, next) => {
  conn.query("SELECT * FROM destinations", function (err, data, fields) {
    if (err) return next(new AppError(err))
    res.status(200).json({
      status: "success",
      data: data,
    });
  });
};

exports.getDestinationsByName = (req, res, next) => {
  conn.query(`SELECT * FROM destinations WHERE name = '${req.params.id}'`, function (err, data, fields) {
    if (err) return next(new AppError(err))
    res.status(200).json({
      status: "success",
      data: data,
    });
  });
};