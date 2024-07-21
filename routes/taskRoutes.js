const express = require('express');
const { getAllTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');

const router = express.Router();

router.get('/tasks', getAllTasks);
router.post('/tasks', createTask);
router.put('/tasks/:task_id', updateTask);
router.delete('/tasks/:task_id', deleteTask);

module.exports = router;
