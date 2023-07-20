import React, { Component } from "react";
import { Outlet } from "react-router-dom";

class ContentLayout extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
}

export default ContentLayout;
