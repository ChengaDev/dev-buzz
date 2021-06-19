import styled from 'styled-components';
import Localization from '../localization/pages/About';
import Head from 'next/head';

const About = () => {
	return (
		<>
			<Head>
				<title>Dev-Buzz | About Chen Gazit</title>
			</Head>
			<Container>
				<h1>{Localization.title}</h1>
			</Container>
		</>
	);
};

const Container = styled.div`
	width: 100%;
	padding-top: 30px;
	height: calc(100vh - 56px);
	overflow: auto;

	h1 {
		text-align: center;
		width: 100%;
	}
`;

export default About;
