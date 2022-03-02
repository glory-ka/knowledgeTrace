#### __run on : https://codesandbox.io__

```javascript
import React from 'react';
import ReactDOM from "react-dom";
//import { render } from 'react-dom';
```
```javascript
let id = 0
const Todo = props => (
    <li>
      <input type='checkbox' checked={props.todo.checked} onChange={props.onToggle}/>
      <button onClick={props.onDelete}>Delete</button>
      <span>{props.todo.text}</span>
    </li>
)
```
```javascript
class App extends React.Component 
{
  constructor()
  {
    super()
    this.state = {
      todos: [],
    }
  }

  addTodo()
  {
    const text = prompt('To do text please!: ')
    this.setState({
      todos: [...this.state.todos, 
              {id: id++, text: text, checked: false}],
    })
  }

  removeTodo(id)
  {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id )
    })
  }

  toggleTodo(id)
  {
    this.setState({
      todos: this.state.todos.map( todo => {
          if (todo.id !== id) return todo
          return ({
            id: todo.id,
            text: todo.text,
            checked: !todo.checked,
          })
      })
    })
  }

  render ()
  {
    return (
      <div>
        <div>Todo count: {this.state.todos.length}</div>
        <div>Unchecked todo count: {this.state.todos.filter(todo => !todo.checked).length}</div>
        <button onClick={() => this.addTodo()}> Add Todo </button>
        <ul>
          {this.state.todos.map(todo => (
              <Todo 
                onToggle={()=> this.toggleTodo(todo.id)} 
                onDelete={() => this.removeTodo(todo.id)}
                todo={todo} 
              />
          ))}
        </ul>
      </div>
    )
  }
}
```
```javascript
const rootElement = document.getElementById("root");
ReactDOM.render(
    <App />,
  rootElement
);
```


