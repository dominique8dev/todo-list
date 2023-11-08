// Define routes
const router = require('express').Router();
const mainCon = require('../controller/mainCon');
// List all tasks

router.get('/', mainCon.getIndex);

//* Add a new task
router.post('/add', mainCon.postTasks);

//* Edit a task
router.post('/edit/:id', mainCon.postEditTasks);

//* Mark a task as completed
router.get('/complete/:id', mainCon.getCompleteTask);

//* Update a task as completed in the json file
router.post('/complete/:id', mainCon.postCompleteTask);

//* Delete a task
router.get('/delete/:id', mainCon.getDeleteTask);


module.exports = router