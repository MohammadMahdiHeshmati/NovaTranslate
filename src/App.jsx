import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Content from "./Components/Content/Content";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
    };
    this.handleThemeChange = this.handleThemeChange.bind(this);
  }
  handleThemeChange(newTheme){
    this.setState({ theme: newTheme });
  }
  render() {
    return (
      <div className={this.state.theme === "light" ? " " : "dark"}>
        <div className="h-screen bg-white dark:bg-slate-800 select-none transition-colors">
          <Header onThemeChange={this.handleThemeChange}/>
          <Content />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
