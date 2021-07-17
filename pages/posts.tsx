import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import styled from 'styled-components';
import Head from 'next/head';
import PostItem from '../components/Shared/PostItem';
import PostMetadata from '../models/PostMetadata';

const Posts = ({ posts }) => {
	return (
		<>
			<Head>
				<title>Dev-Buzz | Posts</title>
			</Head>
			<Container className='container'>
				<h1>All Posts</h1>
				<div className='row'>
					{posts?.map((post, index: number) => {
						return (
							<PostItem
								key={`${post.frontmatter.title}_${index}`}
								post={
									new PostMetadata(
										post.frontmatter.title,
										post.frontmatter.author,
										post.frontmatter.short_description,
										post.frontmatter.image_path,
										post.frontmatter.publish_date,
										post.frontmatter.reading_time,
										post.frontmatter.slug
									)
								}
							/>
						);
					})}
				</div>
			</Container>
		</>
	);
};

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

const Container = styled.div`
	h1 {
		text-align: center;
		width: 100%;
		margin-top: 30px;
		margin-bottom: 20px;
	}
`;

export default Posts;
