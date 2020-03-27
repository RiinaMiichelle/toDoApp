import React from 'react';

const TodoItem = (props) => {
  const { todo, onDeleteTodo } = props;
  return (
    <li>
      {todo}
      <button onClick={onDeleteTodo}>Delete ToDo</button>
    </li>
  )
}

class TodoList extends React.Component {
  constructor(props) {
    super(props)
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
    const todoItems = this.state.todos.map((todo, index) => {
      return (
        <TodoItem
          todo={todo}
          onDeleteTodo={() => this.onClickDelete(index)}
          key={index}
        />
      )
    })

    console.log(todoItems)

    return (
      <div>
        <input value={this.state.todoInput} onChange={this.upDateTodo}></input>
        <button onClick={this.handleButtonClick}>Submit ToDo</button>
        <ul>
          {todoItems}
        </ul>
      </div>
    );
  }
}

export default TodoList;
