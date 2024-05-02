const authorController = require("../controller/authorController")

const router = require("express").Router();

router.get("/getAuthor",authorController.getAuthor)
router.post("/addAuthor",authorController.addAuthor);
router.put("/updateAuthor",authorController.updateAuthor);
router.delete("/deleteAuthor",authorController.deleteAuthor)

module.exports = router;