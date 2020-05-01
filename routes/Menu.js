const express = require("express");
const router = express.Router();
const multer = require("multer");

const menuController = require("../controllers/Menu");

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./public/images/");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
//toISOString() , utk penulisan tidak ada spacenya, menggunakan -
//toLocaleString , utk penulisan ada spacenya

const upload = multer({
  storage: storage,
});

router.post("/create", upload.single("image"), menuController.createData);
router.get("/get", menuController.getData);
router.get("/get/:menuId", menuController.getDataById);
router.delete("/delete/:menuId", menuController.deleteById);
router.put("/update/:menuId", menuController.updateById);

module.exports = router;
