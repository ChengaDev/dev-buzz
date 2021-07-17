import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getPostsMetadata = async () => {
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
};

export default {
	getPostsMetadata
};
