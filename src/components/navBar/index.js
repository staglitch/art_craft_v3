import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { menuIcon } from '../misc/misc'
import ButtonX from '../misc/button'

export default class Navbar extends Component {
	render() {
		return (
			<NavBarX className="navbar navbar-expand-md">
				<ButtonX className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
					<span className="navbar-toggler-icon"></span>
				</ButtonX>
				<div className="mx-auto mr-auto order-0">
					<a className="navbar-brand ml-auto" href="#">Art Craft</a>
				</div>



				<div className="navbar-collapse collapse w-100 order-1 order-md-1 dual-collapse2">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link to='/' className='nav-link'>Home</Link>
						</li>
						<li className="nav-item">
							<Link to='/api/products' className='nav-link'>Products</Link>
						</li>
						<li className="nav-item">
							<Link to='/api/events' className='nav-link'>Events</Link>
						</li>
						<li className="nav-item">
							<Link to='/' className='nav-link'>About us</Link>
						</li>
						<li className="nav-item">
							<Link to='/' className='nav-link'></Link>
						</li>
					</ul>
				</div>

				<div className="navbar-collapse collapse w-100 order-2 dual-collapse2">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link to='/user' className='nav-link'>User</Link>
						</li>
						<li className="nav-item">
							<Link to='/cart' className='nav-link'>Cart</Link>
						</li>
					</ul>
				</div>
			</NavBarX>

		)
	}
}

const NavBarX = styled.nav`
	background-color:var(--mainChampaine)!important;
.nav-link{
	color:var(--mainPinkLink) !important
	font-size:1.3rem;
	text-transform:capitalize;
}
		  
`