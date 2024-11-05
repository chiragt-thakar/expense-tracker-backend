var express = require('express');
const auth = require('../middlewares/auth');
var router = express.Router();
const validate = require("../middlewares/validate.js");
const { addFriendController } = require('../controller/user.controller.js');


router.route("/add/friend").post(auth,validate(),addFriendController)
module.exports = router;
