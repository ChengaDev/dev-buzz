class PostMetadata {
	constructor(
		title: string,
		author: string,
		coverImageUrl: string,
		publishDate: string,
		readingTimeInMinutes: number
	) {
		this.title = title;
		this.author = author;
		this.coverImageUrl = coverImageUrl;
		this.publishDate = publishDate;
		this.readingTimeInMinutes = readingTimeInMinutes;
	}

	title: string;
	author: string;
	coverImageUrl: string;
	publishDate: string;
	readingTimeInMinutes: number;
}

export default PostMetadata;
