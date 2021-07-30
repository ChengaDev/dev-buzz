import postsApi from 'api/posts';
import styled from 'styled-components';
import Head from 'next/head';
import PostItem from 'components/Shared/PostItem';
import PostMetadata from 'models/PostMetadata';
import MetaTitleLocalization from 'localization/MetaTitles';

const Posts = ({ posts }) => {
	return (
		<>
			<Head>
				<title>{MetaTitleLocalization.baseTitle.replace('{pageTitle}', MetaTitleLocalization.posts)}</title>
			</Head>
			<Container className='container'>
				<h1>All Posts</h1>
				<div className='row'>
					{posts?.map((post) => {
						return (
							<PostItem
								key={post.frontmatter.title}
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
	return postsApi.getPostsMetadata();
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
