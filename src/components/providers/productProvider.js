import React, { Component } from 'react'
import { storeProducts, detailProduct } from '../../resources/testData'

const ProductContext = React.createContext()


///Provider
export class ProductProvider extends Component {
	state = {
		products: storeProducts,
		detailProduct: detailProduct
	}
	handleDetail = () => {
		console.log('handle detail invoked!')
	}
	handleATC = () => {
		console.log('handle add to cart invoked!')
	}
	render() {
		return (
			<ProductContext.Provider value={{
				...this.state,
				handleDetail: this.handleDetail,
				handleATC: this.handleATC,
			}}>
				{this.props.children}
			</ProductContext.Provider>
		)
	}
}
////consumer
export const ProductConsumer = ProductContext.Consumer

