import React, { Component } from "react";
import Content2 from "./Content2";
import Footer2 from "./Footer2";
import Header2 from "./Header2";

export default class LayoutReact2 extends Component {
  render() {
    return (
      <div>
        <Header2/>
        <div className="container">
            <Content2/>
        </div>
        <Footer2 />
      </div>
    );
  }
}
