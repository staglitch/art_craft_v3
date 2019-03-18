import React, { Component } from 'react'
import styled from 'styled-components'

export default class ButtonX extends Component {
	render() {
		return (
			<ButtonContainer>
				<span>X</span>
			</ButtonContainer>
		)
	}
}
const ButtonContainer = styled.button`
		font-size:1.4rem;
		border-radius: 5%;
		background:transparent;
		border:0.05rem solid var(--mainBlack);
		color:var(--mainBlack);
		text-transform: uppercase;
		padding:0.2rem 0.5rem;
		border-radius:0.5rem;
		margin: 0.2rem 0.5rem 0.2rem 0;
		transition:all 0.2s ease-in-out;
		&:hover{
			background:var(--mainBlack);
			color:var(--mainChampaine);
		} 
		&:focus{
			outline:none;
			
		}
	`