import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Footer = () => {
	return (
		<Container>
			<Details>All rights reserved 2021 - Chen Gazit</Details>
			<LogoFooter>
				<Image height={35} width={90} src='/logo.png' alt='dev-buzz' />
			</LogoFooter>
		</Container>
	);
};

const Details = styled.div`
	text-align: center;
	font-size: 20px;
`;

const BrandName = styled.div`
	font-size: 25px;
	text-align: center;
`;

const Container = styled.footer`
	color: #e0ced3;
	padding-left: 20%;
	padding-right: 20%;
	font-family: 'Raleway', sans-serif;
	padding-top: 30px;
	padding-bottom: 30px;
	height: 140px;
	width: 100%;
	background-color: #28465c;
`;

const LogoFooter = styled.div`
	text-align: center;
	margin-top: 20px;

	img {
		/* height: 40px; */
		margin: 0 auto;
	}
`;

export default Footer;
