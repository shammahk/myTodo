import React, { Component } from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      done: false,
      id: this.props.key,
      task: this.props.task,

    }

    this.changeTaskState = this.changeTaskState.bind(this);

  }

  changeTaskState() {
    this.setState({
      done : !this.state.done
    })
  }

  render() {
    return (

      <div className=" d-flex align-items-center justify-content-between border py-3">
        <div className="d-flex align-items-center">
          <input type="checkbox" onChange={this.changeTaskState} className="mr-4"/>
          <h4 className={
            this.state.done===true ? "text-grey" : "text-black"
          }>
            {this.state.task}
          </h4>

        </div>
        {this.state.done===true ? <RemoveItem  deleteItem={this.props.deleteItem}/> : ""}

        <style jsx>
          {`
            .text-grey {
              color: #666666;
              text-decoration: line-through;
            }

            h4 {
              margin: 0;
            }

            .border {
              border-left: none !important;
              border-right: none !important;
            }
          `}
        </style>
      </div>

    )
  }
}



function RemoveItem(props) {
  return (
    <button className="btn btn-danger py-1 ml-2 justify-self-end d-flex" onClick={props.deleteItem}>
      -
    </button>
  )
}

export default TodoItem;