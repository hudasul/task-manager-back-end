const express = require("express");
const router = express.Router();

const secureRoute = require("../middleware/secureRoute")
const taskControllers = require("../controllers/task")


router.post('/new', secureRoute, taskControllers.creatTask)
router.get('/', secureRoute, taskControllers.showAllTasks)
router.get("/:id", taskControllers.showTask)
router.put("/:id", taskControllers.updateTask)
router.delete("/:id", taskControllers.deleteTask)



module.exports = router