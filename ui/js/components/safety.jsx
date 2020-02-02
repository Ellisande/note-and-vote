import React, { Component } from "react";

class Safety extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="how">
        <div className="main-subtitle">
          <h2>Is It Safe?</h2>
        </div>
        <div className="how-steps">
          No information is permanently saved by our site. When you delete your
          meeting all the data is permanently lost. You can also lock your
          meetings to limit who can enter.
        </div>
      </div>
    );
  }
}

export default Safety;
