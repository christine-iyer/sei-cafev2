## Trello [Link](https://trello.com/b/Uj1rbgfT/project-management)

### User Stories:

*  As a user I want to be able to create a secure account, login, and logout.

* As a user I want to be able to order food and see my past orders from my favorite restaurant. 

* As a user, I want to be able to check out what everyone is doing on my favorite site, fruits. It's a super cool space because anyone can delete or edit anyone else's post. And it's all anonymous.

* As a user I want to have a todo list at my side at all time. Because I hate reminders, any unfinished todo tasks will be lost when the page is refreshed. 

### Heroku [Link](https://shrouded-crag-13588.herokuapp.com/todos)

### Toolbox

* JavaScript
* React
* SCSS
* MongoDB
* NodeJS & Express
* Heroku
* Postman
* BigPoppa Code
* YouTube-(Traversy Media)

### Postman Routes

**Create account ```POST``` /api/users**

```
{
     "name": "pauline",
     "email": "pauline@gmail.com",
     "password": "pauline",
     "confirm": "pauline"
}
```
**Error 400

**```POST``` /api/users/login**

{
     "email": "Email@gmail.com",
     "password": "password"
}

**```GET``` /api/users/check-token**

Index ```GET``` /api/todos

```
{
     title: {required: true, type: String },
     completed: { required: true, type: String 
     }
```     

**Index ```GET``` /api/todos/completed**
**Delete ```DELETE``` /api/todos/:id**
**Update ```PUT``` /api/todos/:id**
**Create ```POST``` /api/todos**
**Show ```GET``` /api/tods/:id**

**Index ```GET``` /api/items**
**Show ```GET``` /api/items/:id**

**Show ```GET``` /api/orders/cart**
**Index ```GET``` /api/orders/history**

**Create cart ```POST``` /api/orders/cart/items/:id**

**Create paid cart ```POST``` /api/orders/cart/checkout**

**Update ```PUT``` /api/orders/cart/qty**

**Index ```GET``` /api/fruits**
**Create ```POST``` /api/fruits**
**Update ```PUT``` /api/fruits/:id**
**Show ```GET``` /api/fruits/:id**
**Delete ```DELETE``` /api/fruits/:id**



