import React, { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  render() {
    return (
      <div>
        <h1 className="text-lg font-bold">About Page</h1>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default About;
