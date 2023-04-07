import React, { Component } from "react";
import { BiSun, BiMoon } from "react-icons/bi";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
    };
    this.themeHandle = this.themeHandle.bind(this);
  }
  themeHandle(newTheme) {
    this.props.onThemeChange(newTheme);
  }
  render() {
    return (
      <section className="flex justify-between items-center p-2 border-0 border-b border-gray-200 shadow-sm dark:bg-slate-800 dark:border-slate-600">
        <div
          onClick={
            this.state.theme === "light"
              ? () => {
                  this.setState({ theme: "dark" });
                  this.themeHandle('dark')
                }
              : () => {
                  this.setState({ theme: "light" });
                  this.themeHandle('light')
                }
          }
          className="p-1 hover:animate-spin flex justify-center items-center cursor-pointer rounded-full text-indigo-500 border border-indigo-200 dark:border-slate-600"
        >
          {this.state.theme === "light" && <BiSun size={25} />}

          {this.state.theme === "dark" && <BiMoon size={25} />}
        </div>
        <div className="p-1 drop-shadow-md">
          <a
            href="./"
            className="font-semibold font-starlynx text-gray-700 dark:text-gray-200 text-lg"
          >
            <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
              NOVA
            </span>{" "}
            Translate
          </a>
        </div>
      </section>
    );
  }
}
