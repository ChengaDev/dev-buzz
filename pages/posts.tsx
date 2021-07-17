import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import styled from 'styled-components';
import Head from 'next/head';

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
							<BlogPostContainer key={`${post.frontmatter.title}_${index}`} className='col-md-6 col-lg-4'>
								<BlogPost>
									<img src={post.frontmatter.image_path} alt='code' />

									<PostDetails>
										<PostName>{post.frontmatter.title}</PostName>
										<PostDescription>{post.frontmatter.short_description}</PostDescription>
										<ReadingTime>{`${post.frontmatter.reading_time} minutes read`}</ReadingTime>
										<PublishDetails>
											<AuthorName>{post.frontmatter.author}</AuthorName>
											<PublishDate>{post.frontmatter.publish_date}</PublishDate>
										</PublishDetails>
									</PostDetails>
								</BlogPost>
							</BlogPostContainer>
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

const PostName = styled.div`
	font-size: 20px;
	font-weight: bold;
`;

const AuthorName = styled.div`
	left: 0;
	position: absolute;
`;

const PublishDate = styled.div`
	right: 0;
	position: absolute;
`;

const PublishDetails = styled.div`
	height: 22px;
	color: #a87878;
	margin-top: 10px;
	position: relative;
	font-weight: bold;
`;

const PostDescription = styled.div`
	margin-top: 10px;
	color: rgba(0, 0, 0, 0.6);
`;

const PostDetails = styled.div`
	margin-top: 10px;
`;

const ReadingTime = styled.div`
	color: red;
	/* font-weight: bold; */
	margin-top: 10px;
	font-size: 12px;
`;

const Container = styled.div`
	h1 {
		text-align: center;
		width: 100%;
		margin-top: 30px;
		margin-bottom: 20px;
	}
`;

const BlogPostContainer = styled.div`
	width: 100%;
	padding: 10px;
`;

const BlogPost = styled.div`
	border: 1px solid rgba(0, 0, 0, 0.2);
	background-color: white;
	padding: 15px;
	cursor: pointer;
	height: auto;

	img {
		width: 100%;
		opacity: 0.9;
	}
`;

export default Posts;
