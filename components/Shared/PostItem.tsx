import styled from 'styled-components';
import PostMetadata from '../../models/PostMetadata';
import Link from 'next/link';

interface PostItemProps {
	post: PostMetadata;
}

const PostItem = (props: PostItemProps) => {
	const { post } = props;

	return (
		<BlogPostContainer className='col-md-6 col-lg-4'>
			<Link href={`/blog/${post.slug}`}>
				<BlogPost>
					<img src={post.coverImageUrl} alt='code' />
					<PostDetails>
						<PostName>{post.title}</PostName>
						<PostDescription>{post.description}</PostDescription>
						<ReadingTime>{`${post.readingTimeInMinutes} minutes read`}</ReadingTime>
						<PublishDetails>
							<AuthorName>{post.author}</AuthorName>
							<PublishDate>{post.publishDate}</PublishDate>
						</PublishDetails>
					</PostDetails>
				</BlogPost>
			</Link>
		</BlogPostContainer>
	);
};

const PostName = styled.div`
	height: 60px;
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
	height: 72px;
	overflow: hidden;
	margin-top: 10px;
	color: rgba(0, 0, 0, 0.6);
`;

const PostDetails = styled.div`
	margin-top: 10px;
`;

const ReadingTime = styled.div`
	color: red;
	margin-top: 10px;
	font-size: 12px;
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
	transition: transform 0.5s;

	&:hover {
		transform: scale(1.02);
	}

	img {
		height: 215px;
		width: 100%;
		opacity: 0.9;
	}
`;

export default PostItem;
