const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");

const { saveOPDCamp, saveBMDCamp, saveRX, saveBirthday, saveThankyou , savePOB, downloadReportExcel} = require("../controllers/infoController");

router.post("/saveOPD", saveOPDCamp);
router.post("/saveBMDCamp", saveBMDCamp);
router.post("/saveRX", upload.single("rxPhoto"), saveRX);
router.post("/saveBirthday", upload.single("photo"), saveBirthday);
router.post("/saveThankyou", saveThankyou);
router.post("/savePOB", savePOB);
router.post("/downloadReportExcel", downloadReportExcel);

module.exports = router;

