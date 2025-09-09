const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

router.post("/signup", authController.register);
router.post("/login", authController.login);
router.put("/updatePassword", authController.updatePassword)

module.exports = router;