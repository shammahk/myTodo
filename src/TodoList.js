import React, {Component} from 'react';

import TodoItem from './TodoItem';


class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list : [],
    }
      
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

  }

  deleteItem(event) {
    const item = event.target.parentElement;
    let text = item.querySelector("h4").innerHTML.toString();
    console.log(text.toString())
    item.outerHTML = "";
    // for (let index = 0; index < this.state.list.length; index++) {
    //   if (this.state.list[index] === text) {
    //     console.log(index);
    //     this.setState({
    //       list: this.state.list.splice(index, 1)
    //     }) 
    //   }
    // }
    console.log(this.state.list)
  }

  addItem(event) {
  
    let newItem = document.querySelector("[name=item]");
    if (newItem.value === "") {
      newItem.classList.add("invalid");
      newItem.focus();
    } else {
      console.log(this.state.list);
      newItem.classList.remove("invalid");
      this.setState({
        list : this.state.list.concat(newItem.value)
      })
      // let list = this.state.list;
      console.log(this.state.list);
      newItem.value = ""
    }
  }

  render() {
    let list = this.state.list;
    console.log(list)

    return (
  
      <div className="bg-light py-5 px-5 h-80 w-60 list">
        <h1 className="mb-3 text-center">
          My List
        </h1>
  
        <div className="col-12 mx-auto d-flex mb-4">
          <input type="text" name="item" className="form-control col-9 mr-2" />
          <button className="btn btn-primary" onClick={this.addItem}>
            Add Item
          </button>
  
        </div>
  
        {list.length === 0 ? <NoItem /> : ''}

        {list.map((item, index)=> {
          return (<TodoItem 
            key={index}
            task={item}
            deleteItem = {this.deleteItem}
          />)
  
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
  
    )
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
  )
}



export default TodoList;