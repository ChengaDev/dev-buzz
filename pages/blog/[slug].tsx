import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import styled from 'styled-components';
import matter from 'gray-matter';
import marked from 'marked';
import Link from 'next/link';

const Post = ({ frontmatter: { title, publish_date }, slug, content }) => {
	return (
		<>
			<Head>
				<title>Dev-Buzz | Post</title>
			</Head>
			<Container>
				<h3>{title}</h3>
			</Container>
		</>
	);
};

const Container = styled.div`
	h3 {
		width: 100%;
		text-align: center;
		font-size: 35px;
		margin-top: 30px;
	}
`;

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join('posts'));

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace('.md', '')
		}
	}));

	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params: { slug } }) {
	const markDownWithData = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8');

	const { data: frontmatter, content } = matter(markDownWithData);

	return {
		props: {
			frontmatter,
			slug,
			content
		}
	};
}

export default Post;
