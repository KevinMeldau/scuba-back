const express = require("express");
const router = express.Router();
const logsCtrl = require("../../controllers/logs");

router.get("/", logsCtrl.index);
router.post("/", logsCtrl.create);

module.exports = router;
