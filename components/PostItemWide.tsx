import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import PropsMetadata from '../models/PostMetadata';

interface PostItemProps {
	postMetadata: PropsMetadata;
}

const PostItemWide = (props: PostItemProps) => {
	return (
		<Container>
			<Link href={`/blog/${props.postMetadata.slug}`}>
				<PostDisplay>
					<PostImage>
						<img src={props.postMetadata.coverImageUrl} alt='code' />
					</PostImage>
					<PostMetadata>
						<PublishDate>{props.postMetadata.publishDate}</PublishDate>
						<Author>
							Published by <AuthorName>{props.postMetadata.author}</AuthorName>
						</Author>
						<PostTitle>{props.postMetadata.title}</PostTitle>
						<ReadingTime>{props.postMetadata.readingTimeInMinutes} minutes read</ReadingTime>
					</PostMetadata>
				</PostDisplay>
			</Link>
		</Container>
	);
};

const ReadingTime = styled.div`
	color: red;
	font-size: 13px;
	position: absolute;
	bottom: 30px;
	left: 30px;
	font-weight: bold;

	@media (min-width: 911px) and (max-width: 1200px) {
		bottom: 20px;
		left: 20px;
		font-size: 12px;
	}

	@media (max-width: 910px) {
		left: 10px;
		font-size: 10px;
	}
`;

const PostMetadata = styled.div`
	position: relative;
	width: 700px;
	padding: 30px;

	@media (max-width: 1200px) {
		padding: 20px;
		height: 200px;
		width: 500px;
	}

	@media (max-width: 910px) {
		padding: 10px;
		height: 150px;
		width: 340px;
	}
`;

const Author = styled.div`
	font-size: 15px;
	display: flex;

	@media (max-width: 1200px) {
		font-size: 15px;
	}

	@media (max-width: 910px) {
		font-size: 12px;
	}
`;

const AuthorName = styled.div`
	margin-left: 4px;
	color: gray;
	font-weight: bold;
`;

const PublishDate = styled.div`
	font-weight: bold;
	font-size: 15px;

	@media (max-width: 1200px) {
		font-size: 15px;
	}

	@media (max-width: 910px) {
		font-size: 12px;
	}
`;

const PostTitle = styled.div`
	margin-top: 10px;
	font-size: 20px;
	font-weight: bold;

	@media (min-width: 911px) and (max-width: 1200px) {
		font-size: 20px;
	}

	@media (max-width: 910px) {
		font-size: 15px;
		margin-top: 5px;
	}
`;

const PostImage = styled.div`
	opacity: 0.85;

	img {
		height: 200px;
		width: 300px;
	}

	@media (max-width: 1200px) {
		img {
			height: 200px;
			width: 200px;
		}
	}

	@media (max-width: 910px) {
		img {
			height: 130px;
			width: 130px;
		}
	}
`;

const PostDisplay = styled.div`
	display: flex;
	height: 200px;
	width: 1000px;
	margin: 0 auto;
	margin-bottom: 50px;
	background: white;
	cursor: pointer;
	transition: transform 0.5s;
	border: 1px solid rgba(0, 0, 0, 0.15);

	&:hover {
		transform: scale(1.02);
	}

	@media (max-width: 1200px) {
		height: 200px;
		width: 700px;
	}

	@media (max-width: 910px) {
		height: 130px;
		width: 340px;
		margin-bottom: 30px;
	}
`;

const Container = styled.div`
	width: 100%;
`;

export default PostItemWide;
