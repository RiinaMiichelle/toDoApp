import React from 'react';
import logo from './logo.svg';
import './App.css';
import { object } from 'prop-types';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isClicked: false,
      todoInput: " ",
      todos: []
    }
  }

  upDateTodo = (e) => {
    this.setState ({
      todoInput: e.target.value
    })
  }

  onClickDelete = (index) => {
    var newTodos = [...this.state.todos]
    newTodos.splice(index, 1)
    this.setState({ todos: newTodos })
  }

  handleButtonClick = () => {
    var newTodos = [...this.state.todos]
    newTodos.push(this.state.todoInput);
    console.log(newTodos, this.state.todos)
    this.setState ({
      isClicked: true,
      todos: newTodos,
      todoInput: " "
    });
  }

  render() {
    return (
      <div>
        <input value={this.state.todoInput} onChange={this.upDateTodo}></input>
        <button onClick={this.handleButtonClick}>Submit ToDo</button>
        <ul>
          {this.state.todos.map((todos, index) => {
            return (
            <li key={index}>{todos}
              <button onClick={()=>{
                this.onClickDelete(index)
              }}>Delete ToDo</button>
            </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
