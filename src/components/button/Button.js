import React, { Component } from 'react'
import "./Button.css"

export default class Button extends Component {

  render() {
    const {term, bg, color, onClick} = this.props;

    return (
      <button onClick={onClick} className={`btn ${bg} ${color}`}>{term}</button>
    )
  }
}
