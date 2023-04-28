const express = require("express");
const controllers = require("../controllers");
const router = express.Router();

router.route("/destinations").get(controllers.getAllDestinations);
router.route("/destinations/:id").get(controllers.getDestinationsByName);
// router
//  .route("/:id")
//  .get(controllers.getTodo)
//  .put(controllers.updateTodo)
//  .delete(controllers.deleteTodo);
module.exports = router;