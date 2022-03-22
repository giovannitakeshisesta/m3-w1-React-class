import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.action} className={`btn btn-${this.props.type}`}>
        {this.props.children}
      </button>
    )
  }
}

export default Button