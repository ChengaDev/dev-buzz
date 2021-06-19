import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<Container>
			<BrandName>Dev-Buzz</BrandName>
			<Details>All rights reserved 2021</Details>
		</Container>
	);
};

const Details = styled.div`
	padding-left: 30px;
	flex: 3;
	font-size: 20px;
`;

const BrandName = styled.div`
	text-align: center;
	line-height: 180px;
	font-size: 35px;
	flex: 1;
	border-right: 1px solid white;
`;

const Container = styled.footer`
	color: #e0ced3;
	padding-left: 20%;
	padding-right: 20%;
	font-family: 'Raleway', sans-serif;
	padding-top: 30px;
	padding-bottom: 30px;
	display: flex;
	height: 240px;
	width: 100%;
	background-color: #28465c;
`;

export default Footer;
