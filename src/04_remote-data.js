/**
 *  This function fetches all todos from https://jsonplaceholder.typicode.com/todos
 *  and all users from https://jsonplaceholder.typicode.com/users
 *  The function returns how many todos each user has completed.
 *  Example: If user = [{ id: 1, username: 'Tom'}, { id: 2, username: 'Jerry'}]
 *  and todos = [{ id: 2, userId: 1, completed: true}]
 *  Then the function would output [{ username: 'Tom', completed: 0}, { username: 'Jerry', completed: 1}]
 */
const fetch = require('node-fetch') // Include the fetch api to make http requests.

async function solution () {
  var users = await fetch('https://jsonplaceholder.typicode.com/users') // Fetch all users.
    .then(response => response.json())

  var todos = await fetch('https://jsonplaceholder.typicode.com/todos')// Fetch all todos.
    .then(response => response.json())

  const userLookup = users.reduce((acc, curr) => {
    acc[curr.id] = curr
    return acc
  }, {})
  const todosGroupByUser = todos.reduce((acc, curr) => {
    if (acc[curr.userId]) {
      acc[curr.userId].completed = curr.completed ? acc[curr.userId].completed + 1 : acc[curr.userId].completed
    } else {
      acc[curr.userId] = {
        username: userLookup[curr.userId].name,
        completed: curr.completed ? 1 : 0
      }
    }
    return acc
  }, {})
  return (Object.values(todosGroupByUser))
}

module.exports = solution
