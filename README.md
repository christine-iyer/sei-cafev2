// Create account POST /api/users

```
{
     "name": "Anyname",
     "email": "Email@gmail.com",
     "password": "password",
     "confirm": "Password"
}
```
// POST /api/users/login

{
     "email": "Email@gmail.com",
     "password": "password"
}

// GET /api/users/check-token

// Index GET /api/todos

```
{
     title: {required: true, type: String },
     completed: { required: true, type: String 
     }
```     

// Index GET /api/todos/completed
// Delete DELETE /api/todos/:id
// Update PUT /api/todos/:id
// Create POST /api/todos
// Show GET /api/tods/:id

// Index GET /api/items
// Show GET /api/items/:id

// Show GET /api/orders/cart
// Index GET /api/orders/history

// Create cart POST /api/orders/cart/items/:id

// Create paid cart POST /api/orders/cart/checkout

// Update PUT /api/orders/cart/qty

// Index GET /api/fruits
// Create POST /api/fruits
// Update PUT /api/fruits/:id
// Show GET /api/fruits/:id
// Delete DELETE /api/fruits/:id



