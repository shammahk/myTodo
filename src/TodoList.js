import React, { Component } from "react";

import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Lomber", "Jack", "Freek"],
      todoStr: "",
      invalid: true
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(position) {
    let { list } = this.state;

    if (position === 0) {
      list.shift();
      return this.setState({ ...this.state, list });
    } else if (position === list.length - 1) {
      list.pop();
      return this.setState({ ...this.state, list });
    } else {
      const _list = list.slice(0, position).concat(list.slice(position + 1));
      this.setState({ ...this.state, list: _list });
    }
  }

  addItem(event) {
    const { todoStr } = this.state;
    if (todoStr.trim().length > 0) {
      this.setState({
        todoStr: "",
        invalid: false,
        list: [...this.state.list, todoStr]
      });
    } else {
      this.setState({
        ...this.state,
        invalid: true
      });
    }
  }

  render() {
    const { list } = this.state;
    console.log(list);

    return (
      <div className="bg-light py-5 px-5 h-80 w-60 list">
        <h1 className="mb-3 text-center">My List</h1>

        <div className="col-12 mx-auto d-flex mb-4">
          <input
            type="text"
            name="item"
            className={`${
              this.state.invalid ? "invalid" : ""
            } form-control col-9 mr-2`}
            value={this.state.todoStr}
            onChange={evt => {
              this.setState({
                ...this.state,
                todoStr: evt.target.value
              });
            }}
          />
          <button className="btn btn-primary" onClick={this.addItem}>
            Add Item
          </button>
        </div>

        {list.length === 0 && <NoItem />}

        {list.map((item, index) => {
          return (
            <TodoItem
              key={index}
              position={index}
              task={item}
              deleteItem={this.deleteItem}
            />
          );
        })}

        <style>
          {`
  
           .h-80 {
              height: 80vh
  
           }
  
           .list {
             width: 40vw;
           }
          
            h1 {
  
            }
  
            .invalid {
              border: 1px solid red !important;
              box-shadow: 0 0 0 0.2rem rgba(255,0,0,.25) !important;
  }
            }
          `}
        </style>
      </div>
    );
  }
}

function NoItem(props) {
  return (
    <div className="text-center">
      <h6>
        Your List is empty... <br />
        Add items to keep track of them.
      </h6>
    </div>
  );
}

export default TodoList;
