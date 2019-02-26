import React, {Component} from "react";
import {Button} from "antd";
import setTitle from "./utils/pageManagement";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div>
          <Button type="primary" size="large">Primary</Button>
        </div>
    );
  }
}

export default MainPage;