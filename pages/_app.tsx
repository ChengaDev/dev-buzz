import styled from 'styled-components';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Localization from '../localization/Layout';
import NavBar from 'react-bootstrap/Navbar';
import FloatingSocialBox from '../components/FloatingSocialBox/FloatingSocialBox';
import Footer from '../components/Shared/Footer';

export default function App({ Component }) {
	return (
		<Layout>
			<Head>
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Staatliches&family=Raleway:wght@300;400&display=swap'
					rel='stylesheet'
				></link>
				<link rel='stylesheet' href='path/to/font-awesome/css/font-awesome.min.css'></link>
				<link
					rel='stylesheet'
					href='https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
					integrity='sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p'
					crossOrigin='anonymous'
				/>
			</Head>
			<NavBar bg='dark' variant='dark'>
				<NavBar.Brand href='/'>{Localization.brand}</NavBar.Brand>
				<NavBar.Toggle aria-controls='basic-navbar-nav' />
			</NavBar>
			<SubNav>
				<SubNavItem>Home</SubNavItem>
				<SubNavItem>About</SubNavItem>
				<SubNavItem>Posts</SubNavItem>
				<SubNavItem>Contact</SubNavItem>
			</SubNav>
			<FloatingSocialBox />
			<Content>
				<ComponentContainer>{<Component />}</ComponentContainer>
			</Content>
			<MailingBox>
				<MailingBoxTitle>Join now to stay up to date</MailingBoxTitle>
				<div>
					<input placeholder='Enter your Email' />
				</div>
			</MailingBox>

			<Footer />
		</Layout>
	);
}

const MailingBoxTitle = styled.div`
	font-size: 25px;
	color: white;
`;

const MailingBox = styled.div`
	font-family: 'Raleway', sans-serif;
	padding-top: 30px;
	height: 175px;
	width: 100%;
	background-color: #9e414d;
	text-align: center;

	input {
		border: none;
		border-radius: 20px;
		margin-top: 20px;
		height: 50px;
		text-align: center;
		line-height: 40px;
		width: 400px;
		font-size: 30px;
		outline: none;
	}
`;

const SubNav = styled.div`
	font-family: 'Staatliches', cursive;
	padding-right: 100px;
	padding-left: 100px;
	display: flex;
	background-color: #4267b2;
	height: 120px;
	line-height: 120px;
	width: 100%;
	color: white;
	font-size: 30px;
`;

const SubNavItem = styled.div`
	flex: 1;
	text-align: center;
	cursor: pointer;
	transition: all 0.5s;

	&:hover {
		background: orange;
		color: black;
	}
`;

const ComponentContainer = styled.div`
	font-family: 'Raleway', sans-serif;
	width: 100%;
	overflow: auto;
`;

const Layout = styled.div`
	min-height: 100vh;
	color: #203a63;

	.navbar {
		background: #6b92c9 !important;
	}
`;

const Content = styled.div`
	background: #edf0eb;
	display: flex;
	flex-direction: row;
	justify-content: stretch;
	min-height: calc(100vh - 56px);
	overflow: auto;
	padding-bottom: 50px;
`;
