import React, { Component } from 'react'
import Button from '../Button/Button';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount
    }
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleDecrease = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      })
    }
  }

  render() {
    return (
      <div style={{ width: "150px" }} className="mt-5 d-flex align-items-center justify-content-between">
        <Button type="primary" action={this.handleIncrement} > + </Button>
        <div className="py-3">
          {this.state.count}
        </div>
        <Button type="warning" action={this.handleDecrease}> - </Button>
      </div>
    )
  }
}

export default Counter