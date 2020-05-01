const express = require("express");
const router = express.Router();
const coffeeController = require("../controllers/coffee");

router.post("/create", coffeeController.create);
router.get("/get", coffeeController.getData);
router.get("/get/:coffeeId", coffeeController.getDataById);
router.delete("/delete/:coffeeId", coffeeController.deleteById);
router.put("/edit/:coffeeId", coffeeController.updateById);

module.exports = router;
