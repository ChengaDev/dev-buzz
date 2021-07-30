import styled from 'styled-components';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Localization from 'localization/Layout';
import FloatingSocialBox from 'components/FloatingSocialBox/FloatingSocialBox';
import Footer from 'components/Shared/Footer';
import Navigation from 'components/Shared/Navigation';

export default function App({ Component, pageProps }) {
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
				<script
					src='https://js.api.here.com/v3/3.1/mapsjs-core.js'
					type='text/javascript'
					charSet='utf-8'
				></script>
				<script
					src='https://js.api.here.com/v3/3.1/mapsjs-service.js'
					type='text/javascript'
					charSet='utf-8'
				></script>
				<link rel='shortcut icon' type='image/x-icon' href='/Icon.ico' />
			</Head>
			<Navigation />
			<FloatingSocialBox />
			<Content>
				<ComponentContainer>{<Component {...pageProps} />}</ComponentContainer>
			</Content>
			<MailingBox>
				<MailingBoxTitle>Join now to stay up to date</MailingBoxTitle>
				<div>
					<input placeholder='Enter your Email' />
					<Button variant='primary'>Join!</Button>
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

		@media (max-width: 910px) {
			width: 300px;
			font-size: 25px;
		}

		@media (max-width: 411px) {
			height: 40px;
			width: 250px;
			font-size: 16px;
			line-height: 16px;
		}
	}

	button {
		height: 50px;
		width: 100px;
		font-size: 20px;
		margin-bottom: 12px;
		border-radius: 0 20px 20px 0;
		margin-left: -25px;
		background: #6b92c9;
		border: none;

		@media (max-width: 910px) {
			margin-bottom: 10px;
		}

		@media (max-width: 768px) {
			height: 51px;
			margin-bottom: 9px;
		}

		@media (max-width: 411px) {
			height: 40px;
			width: 75px;
			font-size: 16px;
			line-height: 16px;
			margin-top: 6px;
		}
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

		img {
			height: 40px;

			@media (max-width: 910px) {
				height: 35px;
			}
		}
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

	@media (max-width: 910px) {
		padding-bottom: 20px;
		min-height: calc(100vh - 116px);
	}
`;
