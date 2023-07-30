var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  res.status(200).send("Welcome to CoderSchool!");
});

/* Book router */
const bookRouter = require("./book.api.js");
router.use("/books", bookRouter);
module.exports = router;
