const express = require("express");
const controllers = require("../controllers");
const router = express.Router();
const nodemailer = require("nodemailer");

router.route("/").get((req, res, next) => {
    return res.status(200).json({
        status: "success",
        data: "API is running",
      });
})

router.route("/destinations").get(controllers.getAllDestinations);
router.route("/destinations/:id").get(controllers.getDestinationsByName);


const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: "valerontoscano@gmail.com",
      pass: "hwpqxwvebsqwawfz",
  },
});

contactEmail.verify((error) => {
  if (error) {
      console.log(error);
  } else {
      console.log("Ready to Send");
  }
});


router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const message = req.body.message; 
  const category = req.body.category; 
  const mail = {
    from: name,
    to: "valerontoscano@gmail.com",
    subject: "Seeworld Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Mobile: ${mobile}</p>
           <p>Category: ${category}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

// router
//  .route("/:id")
//  .get(controllers.getTodo)
//  .put(controllers.updateTodo)
//  .delete(controllers.deleteTodo);
module.exports = router;