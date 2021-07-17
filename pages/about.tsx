import styled from 'styled-components';
import Localization from '../localization/pages/About';
import Head from 'next/head';

const About = () => {
	return (
		<>
			<Head>
				<title>Dev-Buzz | About Chen Gazit</title>
			</Head>
			<Container className='container'>
				<h1>{Localization.title}</h1>
				<h2>
					<i>"The best way to learn is by teaching someone else"</i>
				</h2>
				<ImageContainer>
					<img src='/chen.png' alt='Chen gazit' />
				</ImageContainer>
				<Content>
					<div className='row'>
						<Box className='col-sm-6' marginTop='0'>
							<BoxInner>
								<BoxTitle>How it all started?</BoxTitle>
								<div>
									I have created this blog in order to learn NextJS, but I liked the result, so I took
									it a step forward and made it online.
								</div>
							</BoxInner>
						</Box>
						<Box className='col-sm-6' marginTop='60px'>
							<BoxInner>
								<BoxTitle>Sharing knowledge</BoxTitle>
								<div>
									One of the main things I love about blogs is that they are a great tool to share
									knowledge and learn from others.
								</div>
							</BoxInner>
						</Box>
					</div>
					<div className='row'>
						<Box className='col-sm-6' marginTop='-15px'>
							<BoxInner>
								<BoxTitle>What would you find here?</BoxTitle>
								<div>
									The blog would mainly be dealing with frontend, ReactJS and Javascript, but also
									about development domain globally.
									<br />
									The posts would be both technical and conseptual.
								</div>
							</BoxInner>
						</Box>
						<Box className='col-sm-6' marginTop='45px'>
							<BoxInner>
								<BoxTitle>The Author</BoxTitle>
								<div>
									My name is Chen, I live in Raanana, Israel.
									<br />
									I currently work as a full-stack developer in a startup called OwnBackup.
									<br />
									I am passionate about frontend, loves open source and Javascript.
									<br />
									In my free time I love to drum, and to operate the 24 shot clock in the Israel
									premier basketball league games.
								</div>
							</BoxInner>
						</Box>
					</div>
					<div className='row'>
						<Box className='col-sm-6' marginTop='-145px'>
							<BoxInner>
								<BoxTitle>Suggetions?</BoxTitle>
								<div>
									Hell yeah! Any suggestion or feedback is received with love.
									<br />
									Feel free to contact me via the contact page or via{' '}
									<strong>gazit.chen@gmail.com</strong>
								</div>
							</BoxInner>
						</Box>
					</div>
				</Content>
			</Container>
		</>
	);
};

interface BoxProps {
	marginTop: string;
}

const Box = styled.div<BoxProps>`
	padding: 20px;
	top: ${(props) => props.marginTop};
	padding-right: 15px;
	padding-left: 15px;

	@media screen and (max-width: 991px) {
		top: -20px;
		padding: 15px;
	}
`;

const BoxInner = styled.div`
	width: 100%;
	height: auto;
	background-color: white;
	padding: 30px;
	border: 1px solid rgba(0, 0, 0, 0.15);
`;

const BoxTitle = styled.div`
	font-size: 30px;
	font-weight: bold;
`;

const Content = styled.div`
	font-size: 20px;
	margin-top: 50px;
`;

const Container = styled.div`
	width: 100%;
	margin-top: 30px;

	h1,
	h2 {
		text-align: center;
		width: 100%;
	}

	h2 {
		margin-top: 30px;
		font-size: 26px;
		font-weight: bold;
	}
`;

const ImageContainer = styled.div`
	text-align: center;
	margin-top: 50px;

	img {
		box-shadow: 0 1px 6px rgb(0 0 0 / 12%), 0 1px 4px rgb(0 0 0 / 24%);
		width: 300px;
	}
`;

export default About;
