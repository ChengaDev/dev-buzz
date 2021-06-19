import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import WritingMachineTitle from '../components/WritingMachineTitle';
import PostItem from '../components/PostItem';

const Home = () => {
	return (
		<Container>
			<Head>
				<title>Dev-Buzz | Homepage</title>
			</Head>
			<WritingMachineTitle />
			<PostsTitle>Recent posts</PostsTitle>
			<Content>
				<PostItem />
				<PostItem />
				<PostItem />
			</Content>
		</Container>
	);
};

const PostsTitle = styled.div`
	font-size: 20px;
	margin-bottom: 10px;
`;

const Container = styled.div`
	h1 {
		text-align: center;
		width: 100%;
		margin-top: 30px;
		margin-bottom: -30px;
	}
	h5 {
		width: 100%;
		text-align: center;
	}
`;

const Content = styled.div`
	padding-left: 100px;
	padding-right: 100px;
	margin-top: 30px;
`;

export default Home;
