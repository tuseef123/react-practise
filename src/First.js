import React, { Component } from "react";

export class First extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          name: "ali",
          roll: 24,
        },
        {
          name: "ahmed",
          roll: 25,
        },
        {
          name: "raza",
          roll: 25,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.list.map((item) => {
          return (
            <div>
              <h1>{item.name}</h1>
              <h1>{item.roll}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default First;
