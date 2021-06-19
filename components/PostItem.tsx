import React from 'react';
import styled from 'styled-components';

const PostItem = () => {
	return (
		<Container>
			<PostDisplay>
				<PostImage>
					<img src='/code.jpg' alt='code' width='300' height='300' />
				</PostImage>
				<PostMetadata>
					<PublishDate>Mon, Jan 9</PublishDate>
					<Author>
						Published by <AuthorName>Chen Gazit</AuthorName>
					</Author>
					<PostTitle>Advanced Vanilla JS is for everyone</PostTitle>
					<ReadingTime>5 minutes read</ReadingTime>
				</PostMetadata>
			</PostDisplay>
		</Container>
	);
};

const ReadingTime = styled.div`
	color: red;
	font-size: 15px;
	position: absolute;
	bottom: 30px;
	left: 30px;
	font-weight: bold;
`;

const PostMetadata = styled.div`
	position: relative;
	width: 700px;
	padding: 30px;
`;

const Author = styled.div`
	font-size: 20px;
	display: flex;
`;

const AuthorName = styled.div`
	margin-left: 4px;
	color: gray;
	font-weight: bold;
`;

const PublishDate = styled.div`
	font-weight: bold;
	font-size: 20px;
`;

const PostTitle = styled.div`
	margin-top: 20px;
	font-size: 30px;
`;

const PostImage = styled.div`
	opacity: 0.9;
	height: 300px;
	width: 300px;
`;

const PostDisplay = styled.div`
	display: flex;
	height: 300px;
	width: 1000px;
	margin: 0 auto;
	margin-bottom: 50px;
	background: white;
	cursor: pointer;
`;

const Container = styled.div`
	width: 100%;
`;

export default PostItem;
