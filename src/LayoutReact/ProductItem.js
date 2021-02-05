import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    return (
      <div>
        <div className="card h-100 m-3">
            <img
              className="card-img-top"
              src="http://placehold.it/700x400"
              alt
            />
            <div className="card-body">
              <h4 className="card-title text-left text-primary">Item One</h4>
              <h4 className="card-title text-left">$24.99</h4>
              <p className="card-text text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente esse necessitatibus neque.
              </p>
            </div>
            <div className="card-footer">
            </div>
          </div>
      </div>
    );
  }
}
