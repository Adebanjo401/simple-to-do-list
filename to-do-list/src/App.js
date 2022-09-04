import React, { Component } from 'react';
import AddTodo from './AddForm';
import Todos from './Todos';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Go to the market by 5pm'},
      {id: 2, content: 'Call the Technician to fix the Fan'}
    ]
  }
  deleteTodo =(id) => {
    const todos = this.state.todos.filter(todo => {
     return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos  
    })
  }
  render() {
    return (
    <div className="todo-app container">
      <h1 className="center blue-text">MY TO-DO LIST</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      <AddTodo addTodo={this.addTodo}  />
    </div>
    );
  }
}

export default App;
