class SocialLink {
	constructor(iconName: string, displayName: string, backgroundColor: string, url: string) {
		this.iconName = iconName;
		this.displayName = displayName;
		this.backgroundColor = backgroundColor;
		this.url = url;
	}

	iconName: string;
	displayName: string;
	backgroundColor: string;
	url: string;
}

export default SocialLink;
