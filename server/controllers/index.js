const AppError = require("../utils/appError");
const conn = require("../services/db");

exports.getAllDestinations = (req, res, next) => {

  let locationResult = ''
  if (req.query.location) {
    req.query.location.split(',').map((location) => {
      locationResult = locationResult.concat(`'${location}',`)
    })
    locationResult = locationResult.slice(0,-1)
  }

  let continentsResult = ''
  if (req.query.continents) {
    req.query.continents.split(',').map((continent) => {
      continentsResult = continentsResult.concat(`'${continent}',`)
    })
    continentsResult = continentsResult.slice(0,-1)
  }

  conn.query(
    `SELECT * FROM destinations 
    ${req.query.search ? `WHERE name LIKE '${req.query.search}%'` : "WHERE name LIKE '%'"}
    ${req.query.location ? `AND location IN (${locationResult})` : ""}
    ${req.query.continents ? `AND continent IN (${continentsResult})` : ""}
    `, function (err, data, fields) {
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