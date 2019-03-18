import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductConsumer } from '../../providers/productProvider'
import { Link } from 'react-router-dom'

export default class ProductCard extends Component {
	render() {
		const { id, title, img, price, inCart } = this.props.product
		return (
			<ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
				<div className='card'>
					<div className="img-container p-5"
						onClick={() =>
							console.log('image clicked!')
						}>
						<Link to='/details'>
							<img src={img} alt='product-image' className='card-img-top' />
						</Link>
						<button
							className='cart-btn'
							disabled={inCart ? true : false}
							onClick={() => console.log('added to the cart!')}
						>
							{inCart ?
								(
									<p className='text-capitalize mb-0' disabled>{''}in Cart</p>
								) : (
									<i className="fas fa-cart-plus"></i>
								)
							}
						</button>
						<i className="fas fa-certificate"></i>
					</div>
				</div>
			</ProductWrapper>
		)
	}
}

const ProductWrapper = styled.div`

`
