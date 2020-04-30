const express = require("express");
const router = express.Router();

const menuController = require("../controllers/Menu");

router.post("/create", menuController.createData);
router.get("/get", menuController.getData);
router.get("/get/:menuId", menuController.getDataById);
router.delete("/delete/:menuId", menuController.deleteById);
router.put("/update/:menuId", menuController.updateById);

module.exports = router;
