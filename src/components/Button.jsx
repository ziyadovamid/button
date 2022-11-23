import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <div>
        <button className="button" onClick={() => console.log("Button Click")}>Click</button>
      </div>
    )
  }
}
