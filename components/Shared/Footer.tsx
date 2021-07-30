import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<Container>
			<Details>All rights reserved 2021 - Chen Gazit</Details>
		</Container>
	);
};

const Details = styled.div`
	text-align: center;
	font-size: 20px;
`;

const Container = styled.footer`
	color: #e0ced3;
	padding-left: 20%;
	padding-right: 20%;
	font-family: 'Raleway', sans-serif;
	padding-top: 30px;
	padding-bottom: 30px;
	height: 90px;
	width: 100%;
	background-color: #28465c;

	@media (max-width: 768px) {
		height: 130px;
	}
`;

export default Footer;
