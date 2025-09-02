const express = require("express");
const router = express.Router();

const secureRoute = require("../middleware/secureRoute")
const projectControllers = require("../controllers/project")

router.post('/new',secureRoute, projectControllers.createProject)
router.get('/',secureRoute, projectControllers.showAllProjects)
router.get('/:id', projectControllers.showProject)
router.put('/:id', projectControllers.updateProject)
router.delete('/:id', projectControllers.deleteProject)
router.post('/:id/task', projectControllers.addTaskToProject)
router.get('/:id/task',projectControllers.getAllProjectTasks)



module.exports = router
