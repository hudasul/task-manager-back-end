const Task = require("../models/task");

async function creatTask(req, res) {
  try {
    const createdTask = await Task.create({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      status: req.body.status,
      importance: req.body.importance,
      creator: req.user.id,
    });

    res.status(201).json(createdTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function showAllTasks(req, res) {
  try {
    const allTasks = await Task.find({ projectId: null });
    if (allTasks.length) {
      res.status(200).json(allTasks);
    } else {
      res.status(204);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function showTask(req, res) {
  try {
    const foundTask = await Task.findById(req.params.id);
    if (foundTask) {
      res.status(200).json(foundTask);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateTask(req, res) {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteTask(req, res) {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  creatTask,
  showAllTasks,
  showTask,
  updateTask,
  deleteTask,
};
