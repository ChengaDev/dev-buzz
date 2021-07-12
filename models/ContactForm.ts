class ContactFormModel {
	constructor(
		firstName: string = '',
		lastName: string = '',
		company: string = '',
		email: string = '',
		subject: string = '',
		content: string = ''
	) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.company = company;
		this.email = email;
		this.subject = subject;
		this.content = content;
	}

	firstName: string;
	lastName: string;
	company: string;
	email: string;
	subject: string;
	content: string;
}

export default ContactFormModel;
