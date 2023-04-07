import React, { Component } from "react";
import { RiExchangeLine } from "react-icons/ri";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translate: "topersian",
      textarea: "",
    };
  }
  textareaHandler(event) {
    this.setState({ textarea: event.target.value });
  }
  render() {
    return (
      <section className="m-2 rounded-lg border overflow-hidden border-gray-200 dark:border-slate-600 shadow-[0_1px_4px_0_rgba(0,0,0,.1)]">
        <div className="font-vazir">
          <div
            className={`flex ${
              this.state.translate === "toenglish"
                ? "flex-row"
                : "flex-row-reverse"
            } justify-between items-center p-3 border-0 border-b border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800`}
          >
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-700 relative inline-block">
              <span className="relative text-white">ENGLISH</span>
            </span>
            <span
              className="cursor-pointer dark:text-slate-600 text-gray-700 hover:text-emerald-500 transition-all"
              onClick={
                this.state.translate === "toenglish"
                  ? () => this.setState({ translate: "topersian" })
                  : () => this.setState({ translate: "toenglish" })
              }
            >
              <RiExchangeLine size={25} />
            </span>
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-emerald-700 relative inline-block">
              <span className="relative text-white">PERSIAN</span>
            </span>
          </div>
          <div className="flex flex-col md:flex-row-reverse justify-center items-stretch md:items-center">
            <div className="md:h-72 flex items-stretch basis-full md:basis-1/2">
              <textarea
                value={this.state.textarea}
                onChange={(event) => this.textareaHandler(event)}
                dir={this.state.translate === "toenglish" ? "rtl" : "ltr"}
                className="w-full outline-none h-44 bg-white dark:bg-slate-700 md:h-full p-2 resize-none dark:text-white"
                placeholder={
                  this.state.translate === "toenglish"
                    ? "لطفا متن فارسی خود را بنویسید..."
                    : "Please write your English text..."
                }
              ></textarea>
            </div>
            <div className="md:h-72 basis-full md:basis-1/2 border border-y-0 border-gray-200 dark:border-slate-600">
              <p
                dir={this.state.translate === "toenglish" ? "rtl" : "ltr"}
                className="w-full h-64 overflow-y-auto break-all dark:bg-slate-800 md:h-full bg-gray-100 text-md p-2 text-gray-800 dark:text-gray-200"
              >
                ...
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
