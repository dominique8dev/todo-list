const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json());

let tasks = [];
const tasksFilePath = 'tasks.json';

if (fs.existsSync(tasksFilePath)) {
    const data = fs.readFileSync(tasksFilePath);
    tasks = JSON.parse(data);
}

//* List all tasks
exports.getIndex = (req, res) => {
    res.render('index', { tasks });
}

//* Add a new task
exports.postTasks = (req, res) => {
    const newTask = req.body.task;
    tasks.push({ task: newTask, completed: false });
    saveTasks();
    res.redirect('/');
}

//* Edit a task
exports.postEditTasks = (req, res) => {
    const taskId = req.params.id;
    const updatedTask = req.body.updatedTask;
    tasks[taskId].task = updatedTask;
    saveTasks();
    res.redirect('/');
}

//* Mark a task as completed
exports.getCompleteTask = (req, res) => {
    const taskId = req.params.id;
    tasks[taskId].completed = true;
    saveTasks();
    res.redirect('/');
}

//* Update a task as completed in the json file
exports.postCompleteTask = (req, res) => {
    const taskId = req.params.id;
    tasks[taskId].completed = !tasks[taskId].completed;
    saveTasks();
    res.redirect('/');
}

//* Delete a task
exports.getDeleteTask = (req, res) => {
    const taskId = req.params.id;
    tasks.splice(taskId, 1);
    saveTasks();
    res.redirect('/');
}

//* Function to save tasks to the JSON file
function saveTasks() {
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks), 'utf8');
}
