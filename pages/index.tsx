import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import WritingMachineTitle from '../components/WritingMachineTitle';
import PostItem from '../components/PostItem';
import PostMetadata from '../models/PostMetadata';

const Home = () => {
	return (
		<Container>
			<Head>
				<title>Dev-Buzz | Homepage</title>
			</Head>
			<WritingMachineTitle />
			<PostsTitle>Recent posts</PostsTitle>
			<Content>
				<PostItem
					postMetadata={
						new PostMetadata('Advanced Vanilla JS is for everyone', 'Chen Gazit', '/code', 'Mon, Jan 9', 5)
					}
				/>
				<PostItem
					postMetadata={
						new PostMetadata('Lorem Ipsum dolor sit amet', 'Jason Derulo', '/code', 'Fri, Dev 15', 10)
					}
				/>
				<PostItem
					postMetadata={
						new PostMetadata(
							'Why KIA sportage in the best car in the world?',
							'KIA Motors',
							'/code',
							'Tue, Sep 23',
							4
						)
					}
				/>
			</Content>
		</Container>
	);
};

const PostsTitle = styled.div`
	font-size: 20px;
	margin-top: 30px;
	margin-bottom: -15px;
	text-align: center;

	@media (max-width: 910px) {
		margin-bottom: 0px;
		margin-top: 15px;
	}
`;

const Container = styled.div`
	h1 {
		text-align: center;
		width: 100%;
		margin-top: 30px;
		margin-bottom: -30px;

		@media (max-width: 910px) {
			font-size: 30px !important;
		}
	}

	h2 {
		width: 100%;
		text-align: center;

		@media (max-width: 910px) {
			font-size: 22px !important;
		}
	}
`;

const Content = styled.div`
	padding-left: 100px;
	padding-right: 100px;
	margin-top: 30px;

	@media (max-width: 910px) {
		padding-left: 15px;
		padding-right: 15px;
		margin-top: 10px;
	}
`;

export default Home;
