import { Formik } from 'formik';
import styled from 'styled-components';
import CotanctFormModel from 'models/ContactForm';
import { Form, Button } from 'react-bootstrap';
import ContactFormValidationSchema from 'validationSchemas/ContactForm';
import Localization from 'localization/components/Contact/ContactForm';

const validationSchema = ContactFormValidationSchema();

const ContactForm = () => {
	return (
		<div className='container'>
			<Formik initialValues={new CotanctFormModel()} validationSchema={validationSchema} onSubmit={() => {}}>
				{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId='firstName'>
							<Form.Control
								value={values.firstName}
								onChange={handleChange}
								onBlur={handleBlur}
								autoComplete='off'
								type='text'
								placeholder={Localization.labels.firstName}
							/>
							<FieldErrorMessage>
								{errors.firstName && touched.firstName && errors.firstName}
							</FieldErrorMessage>
						</Form.Group>

						<Form.Group controlId='lastName'>
							<Form.Control
								value={values.lastName}
								onChange={handleChange}
								onBlur={handleBlur}
								autoComplete='off'
								type='text'
								placeholder={Localization.labels.lastName}
							/>
							<FieldErrorMessage>
								{errors.lastName && touched.lastName && errors.lastName}
							</FieldErrorMessage>
						</Form.Group>

						<Form.Group controlId='company'>
							<Form.Control
								value={values.company}
								onChange={handleChange}
								onBlur={handleBlur}
								autoComplete='off'
								type='text'
								placeholder={Localization.labels.company}
							/>
							<FieldErrorMessage>{errors.company && touched.company && errors.company}</FieldErrorMessage>
						</Form.Group>

						<Form.Group controlId='email'>
							<Form.Control
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
								autoComplete='off'
								type='email'
								placeholder={Localization.labels.email}
							/>
							<FieldErrorMessage>{errors.email && touched.email && errors.email}</FieldErrorMessage>
						</Form.Group>

						<Form.Group controlId='subject'>
							<Form.Control as='select' placeholder={Localization.placeholders.subject}>
								<option>{Localization.labels.subject.newPost}</option>
								<option>{Localization.labels.subject.contactAuthor}</option>
								<option>{Localization.labels.subject.feedback}</option>
								<option>{Localization.labels.subject.sayingHi}</option>
							</Form.Control>
							<FieldErrorMessage></FieldErrorMessage>
						</Form.Group>

						<Form.Group controlId='content'>
							<Form.Control
								value={values.content}
								onChange={handleChange}
								onBlur={handleBlur}
								autoComplete='off'
								as='textarea'
								placeholder={Localization.labels.content}
								rows={5}
							/>
							<FieldErrorMessage>{errors.content && touched.content && errors.content}</FieldErrorMessage>
						</Form.Group>

						<Button disabled={isSubmitting} type='submit' className='mb-2'>
							{Localization.submitButtonText}
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

const FieldErrorMessage = styled.div`
	color: red;
	font-size: 12px;
	height: 12px;
`;

export default ContactForm;
