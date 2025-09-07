const project = require("../models/project")
const Task = require("../models/task")


async function createProject(req,res) {
    try{
        const createdProject = await project.create({
            title: req.body.title,
            date: req.body.date,
            creator:req.user.id
        })

        res.status(201).json(createdProject);

    }catch (error) {
  
    res.status(500).json({ error: error.message });
  }
    
}

async function showProject(req,res) {
    try {
    const foundProject = await project.findById(req.params.id);
    if (foundProject) {
      res.status(200).json(foundProject);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
    
}

async function showAllProjects(req,res) {
    try {
    const allProjects = await project.find();
    if (allProjects.length) {
      res.status(200).json(allProjects);
    } else {
      res.status(204);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
    
}

async function updateProject(req,res) {
    try {
    const updatedProject = await project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
    
}

async function deleteProject(req,res) {
  try {
    const deletedProject = await project.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedProject)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function addTaskToProject(req,res) {
     try {
    const newTask = new Task({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      status: req.body.status,
      importance:req.body.importance,
      creator: req.user.id,
      projectId: req.params.id
    });

    await newTask.save();

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getAllProjectTasks(req,res) {
    try {
    const allTasks = await Task.find({ projectId: req.params.id });

    if (allTasks.length) {
      res.status(200).json(allTasks);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
    
}

module.exports={
    createProject,
    showProject,
    showAllProjects,
    updateProject,
    deleteProject,
    addTaskToProject,
    getAllProjectTasks
}