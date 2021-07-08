class PostMetadata {
	constructor(
		title: string,
		author: string,
		coverImageUrl: string,
		publishDate: string,
		readingTimeInMinutes: number,
		slug: string
	) {
		this.title = title;
		this.author = author;
		this.coverImageUrl = coverImageUrl;
		this.publishDate = publishDate;
		this.readingTimeInMinutes = readingTimeInMinutes;
		this.slug = slug;
	}

	title: string;
	author: string;
	coverImageUrl: string;
	publishDate: string;
	readingTimeInMinutes: number;
	slug: string;
}

export default PostMetadata;
