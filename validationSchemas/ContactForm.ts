import * as Yup from 'yup';
import Localization from 'localization/components/Contact/ContactForm';

const ContactFormValidationSchema = () => {
	const { errorMessages, labels } = Localization;

	return Yup.object().shape({
		firstName: Yup.string()
			.min(2, errorMessages.shortField.replace('{field}', labels.firstName))
			.max(50, errorMessages.longField.replace('{field}', labels.firstName))
			.required(errorMessages.required.replace('{field}', labels.firstName)),
		lastName: Yup.string()
			.min(2, errorMessages.shortField.replace('{field}', labels.lastName))
			.max(50, errorMessages.longField.replace('{field}', labels.lastName))
			.required(errorMessages.required.replace('{field}', labels.lastName)),
		email: Yup.string()
			.email(errorMessages.invalid.replace('{field}', labels.email))
			.required(errorMessages.required.replace('{field}', labels.email))
	});
};
export default ContactFormValidationSchema;
