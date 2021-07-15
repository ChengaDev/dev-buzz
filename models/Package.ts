class Package {
	constructor(
		name: string,
		url: string,
		repo_url: string,
		npm_url: string,
		author: string,
		description: string,
		lisence: string
	) {
		this.name = name;
		this.url = url;
		this.repo_url = repo_url;
		this.npm_url = npm_url;
		this.author = author;
		this.description = description;
		this.lisence = lisence;
	}

	name: string;
	url: string;
	repo_url: string;
	npm_url: string;
	author: string;
	description: string;
	lisence: string;
}

export default Package;
