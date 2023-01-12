const express = require('express')
const router = express.Router()
const todoCtrl = require('../../controllers/api/todos')


// Index /api/todos
router.get('/', todoCtrl.indexNotComplete, todoCtrl.jsonTodos)
// Index /api/todos/completed
router.get('/completed', todoCtrl.indexComplete, todoCtrl.jsonTodos)
// Delete /api/todos/:id
router.delete('/:id', todoCtrl.destroyTodo, todoCtrl.jsonTodo)
// Update /api/todos/:id
router.put('/:id', todoCtrl.updateTodo, todoCtrl.jsonTodo)
// Create /api/todos
router.post('/', todoCtrl.createTodo, todoCtrl.jsonTodo)
// Show /api/tods/:id
router.get('/:id', todoCtrl.showTodo, todoCtrl.jsonTodo)

module.exports = router