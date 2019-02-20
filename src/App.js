import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Inbox from "./components/Inbox";
import Mail from "./components/Mail";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <Inbox />
        <Mail />
      </div>
    );
  }
}

export default App;
