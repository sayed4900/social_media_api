const express = require("express");
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");

const router = express.Router();

router.get("/profile/:id", authController.getProfile);
router.post("/signup", authController.signup);
router.post("/login", authController.login);
module.exports = router;
