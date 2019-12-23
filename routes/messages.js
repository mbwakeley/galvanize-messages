const express = require("express");
const router = express.Router();
const messagesController = require("../controllers/messages");

router.get("/", messagesController.getAllMessages);
router.get("/:id", messagesController.getOneMessage);
router.post("/", messagesController.addOneMessage);
router.patch("/:id", messagesController.updateOneMessage);
router.delete("/:id", messagesController.removeOneMessage);

module.exports = router;
