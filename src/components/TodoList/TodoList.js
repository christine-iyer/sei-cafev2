import styles from './TodoList.module.scss'
import Todo from '../Todo/Todo'

export default function TodoList({
    todos,
    addTodo,
    completeTodo,
    deleteTodo,
    editTodoText
  }) {
    return (
      <div >
        <h1>Create Todo</h1>
        <input
          type="text"
          onKeyDown={(e) => {
            e.key === "Enter" && addTodo(e)
          }}
        />
        {todos.length ? (
          <div className={styles.FlexContainer}>
            <div>
            <h1>Todo Items</h1>
            <ul className={styles.NotCompleted}>
              {todos
                .filter((i) => !i.completed)
                .map((todo) => {
                  return (
                    <Todo
                      key={todo.id}
                      todo={todo}
                      completeTodo={completeTodo}
                      deleteTodo={deleteTodo}
                      editTodoText={editTodoText}
                    />
                  )
                })}
            </ul>
            </div>

            <div>
            <h1>Completed Items </h1>
            <ul className={styles.Completed}>
              {todos
                .filter((i) => i.completed)
                .map((todo) => {
                  return (
                    <Todo
                      key={todo.id}
                      todo={todo}
                      completeTodo={completeTodo}
                      deleteTodo={deleteTodo}
                      editTodoText={editTodoText}
                    />
                  )
                })}
            </ul>
            </div>
          </div>
        ) : (
          <h1>No Todos Added Yet</h1>
        )}
      </div>
    )
  }