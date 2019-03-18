import React, { Component } from 'react'

export default class Header extends Component {
	render() {
		return (
			<div className='container header-container'>
				<span className="col-sm-3">Logo</span>
				<span className="col-sm-5">Search</span>
				<span className="col-sm-4 ">Sign-In!</span>
			</div>
		)
	}
}
