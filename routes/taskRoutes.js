const express = require("express");
const router = express.Router();

const secureRoute = require("../middleware/secureRoute")
const taskControllers = require("../controllers/task")


router.post('/new', secureRoute, taskControllers.creatTask)



module.exports = router