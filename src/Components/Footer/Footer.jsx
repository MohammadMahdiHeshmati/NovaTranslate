import React, { Component } from "react";
import { AiOutlineCopyright } from "react-icons/ai";

export default class Footer extends Component {
  render() {
    return (
      <section className="fixed bottom-0 left-0 right-0 flex justify-center items-center p-2 border-0 border-t border-gray-200 shadow-[0px_-1px_2px_0px_rgba(0,0,0,0.05)] dark:bg-slate-800 dark:border-slate-600">
        <div className="text-xs sm:text-sm p-2">
          <span className="flex justify-center items-center text-gray-800 dark:text-gray-200">
          <AiOutlineCopyright size={15} /><span className="mx-1 relative top-[1px]">Powered by ChatGPT - All rights reserved</span>
          </span>
        </div>
      </section>
    );
  }
}
