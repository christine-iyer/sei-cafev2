const Todo = require('../../models/todo')

module.exports = {
     createTodo, 
     indexComplete, 
     indexNotComplete, 
     showTodo, 
     updateTodo, 
     destroyTodo, 
     jsonTodos,
     jsonTodo
}

function jsonTodo(req,res) {
     res.json(res.locals.data.todo)
}

function jsonTodos(req,res) {
      res.json(res.locals.data.todos)     
}
async function createTodo(req,res,next) {
     try {
          const todo = await Todo.createTodo(req.body)
          console.log(todo)
          res.locals.data.todo = todo
          next()
     } catch (error) {
          res.status(400).json({ msg: error.message })          
     }
}

async function indexComplete(req,res,next) {
     try {
          const todos = await Todo.find({ completed: true })
          res.locals.data.todos = todos
          next()
     } catch (error) {
          res.status(400).json({ msg: error.message })          
     }
}

async function indexNotComplete(req,res,next) {
     try {
          const todos = await Todo.find({ completed: false })
          res.locals.data.todos = todos
          next()
     } catch (error) {
          res.status(400).json({ msg: error.message })          
     }
}

async function showTodo(req,res,next) {
     try {
          const todo = await Todo.findById(req.params.id)
          res.locals.data.todo = todo  
          next()
     } catch (error) {
          res.status(400).json({ msg: error.message })          
     }
}

async function updateTodo(req,res,next) {
     try {
          const todo = await Todo.findById(req.params.id)
          res.locals.data.todo = todo  
          next()
     } catch (error) {
          res.status(400).json({ msg: error.message })          
     }

     async function destroyTodo(req, res, next){
          try {
              const todo = await Todo.findByIdAndDelete(req.params.id)
              res.locals.data.todo = todo
              next()
          } catch (error) {
              res.status(400).json({ msg: error.message })       
          }
      }
      
}