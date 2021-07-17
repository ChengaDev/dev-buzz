import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import styled from 'styled-components';
import WritingMachineTitle from '../components/WritingMachineTitle';
import PostItem from '../components/PostItem';
import PostMetadata from '../models/PostMetadata';

export default function Home({ posts }) {
	return (
		<Container>
			<Head>
				<title>Dev-Buzz | Homepage</title>
			</Head>
			<WritingMachineTitle />
			<PostsTitle>Recent posts</PostsTitle>
			<Content>
				{posts?.map((post, index: number) => {
					return (
						<PostItem
							key={`${post.frontmatter.title}_${index}`}
							postMetadata={
								new PostMetadata(
									post.frontmatter.title,
									post.frontmatter.author,
									post.frontmatter.cover_image,
									post.frontmatter.publish_date,
									post.frontmatter.reading_time,
									post.frontmatter.slug
								)
							}
						/>
					);
				})}
			</Content>
		</Container>
	);
}

export async function getStaticProps() {
	// get files from posts directory
	const files = fs.readdirSync(path.join('posts'));

	// get slug and matter from posts
	const posts = files.map((filename) => {
		// create slug
		const slug = filename.replace('.md', '');

		// get matter
		const markDownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');

		const { data: frontmatter } = matter(markDownWithMeta);

		return { slug, frontmatter };
	});

	return {
		props: {
			posts: posts
		}
	};
}

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
