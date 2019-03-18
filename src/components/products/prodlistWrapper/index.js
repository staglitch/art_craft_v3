import React, { Component } from 'react'
import ProductCard from '../productCard'
import styled from 'styled-components'
import { storeProducts } from '../../../resources/testData'
import { ProductConsumer } from '../../providers/productProvider'


export default class Product extends Component {

	state = {
		products: storeProducts
	}
	render() {
		console.log(this.state.products)
		return (
			<div className='container'>
				<BoxTitle>Our products</BoxTitle>
				<div className='row'>
					<ProductConsumer>
						{value => {
							return value.products.map((product) => {
								return <ProductCard key={product.id} product={product} />
							})
						}}
					</ProductConsumer>
				</div>
			</div>
		)
	}
}



const BoxTitle = styled.header`
	text-align:center;
	text-transform:uppercase;
	font-size:2rem;
	letter-spacing:0.15rem;
	color:var(--cherryRed);
	text-decoration:none;
`
