import React, { Component } from 'react'
import ProductItem2 from './ProductItem2'

export default class ProductList2 extends Component {
    render() {
        return (
            <div className="row text-center">
                <div className="col-lg-3 col-md-6 mb-4">
                    <ProductItem2/>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <ProductItem2/>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <ProductItem2/>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <ProductItem2/>
                </div>
            </div>
        )
    }
}
