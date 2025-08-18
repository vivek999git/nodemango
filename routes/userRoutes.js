const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/save", userController.createUser);
router.get("/list", userController.getUsers);
router.get("/find/:id", userController.getUser);

router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
