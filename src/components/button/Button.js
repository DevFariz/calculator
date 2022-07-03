import React, { Component } from 'react'
import "./Button.css"

export default class Button extends Component {

  render() {

    const {term, bg, color} = this.props

    return (
      <button className={`btn ${bg} ${color}`}>{term}</button>
    )
  }
}
