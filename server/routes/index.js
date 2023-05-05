const express = require("express");
const controllers = require("../controllers");
const router = express.Router();

router.route("/").get((req, res, next) => {
    return res.status(200).json({
        status: "success",
        data: "API is running",
      });
})

router.route("/destinations").get(controllers.getAllDestinations);
router.route("/destinations/:id").get(controllers.getDestinationsByName);
// router
//  .route("/:id")
//  .get(controllers.getTodo)
//  .put(controllers.updateTodo)
//  .delete(controllers.deleteTodo);
module.exports = router;