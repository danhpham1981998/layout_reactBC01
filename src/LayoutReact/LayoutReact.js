import React, { Component } from "react";
import Carousel from "./Carousel";
import Content from "./Content";
import Ffooter from "./Ffooter";
import SliderMenu from "./SliderMenu";



export default class LayoutReact extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand " href="#">
              Start Bootstrap
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto mr-5 pr-5">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
            <div className="row mt-3">
                <div className="col-2 ml-3">
                    <h2>Shop Name</h2>
                    <SliderMenu/>
                </div>
                <div className="col-8">
                    <Content/>
                </div>
            </div>
        </div>
        <div>
          <Ffooter/>
        </div>
      </div>
    );
  }
}
