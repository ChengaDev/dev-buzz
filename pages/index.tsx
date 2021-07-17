import Head from 'next/head';
import styled from 'styled-components';
import WritingMachineTitle from '../components/WritingMachineTitle';
import PostItem from '../components/Shared/PostItem';
import PostMetadata from '../models/PostMetadata';
import postsApi from '../api/posts';

export default function Home({ posts }) {
	return (
		<Container className='container'>
			<Head>
				<title>Dev-Buzz | Homepage</title>
			</Head>
			<WritingMachineTitle />
			<PostsTitle>Recent posts</PostsTitle>
			<Content className='row'>
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
			</Content>
		</Container>
	);
}

export async function getStaticProps() {
	return postsApi.getPostsMetadata();
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
	margin-top: 30px;

	@media (max-width: 910px) {
		padding-left: 15px;
		padding-right: 15px;
		margin-top: 10px;
	}
`;
