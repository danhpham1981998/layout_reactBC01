import React, { Component } from "react";

export default class SliderMenu extends Component {
  render() {
    return (
      <div className="mg-2">
        <div id="accordion">
          <div className="card">
            <div className="card-header">
              <a
                className="collapsed card-link"
                data-toggle="collapse"
                href="#collapseOne"
              >
                Category 1
              </a>
            </div>
            <div
              id="collapseOne"
              className="collapse"
              data-parent="#accordion"
            >
              <div className="card-body">Lorem ipsum..</div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <a
                className="collapsed card-link"
                data-toggle="collapse"
                href="#collapseTwo"
              >
                Category 2
              </a>
            </div>
            <div id="collapseTwo" className="collapse" data-parent="#accordion">
              <div className="card-body">Lorem ipsum..</div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <a
                className="collapsed card-link"
                data-toggle="collapse"
                href="#collapseThree"
              >
                Category 3
              </a>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              data-parent="#accordion"
            >
              <div className="card-body">Lorem ipsum..</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
