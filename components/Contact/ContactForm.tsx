import { Formik } from 'formik';
import styled from 'styled-components';
import CotanctFormModel from '../../models/ContactForm';
import { Form, Button } from 'react-bootstrap';
import * as Yup from 'yup';

const ContactFormValidationSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(2, 'First name is too short')
		.max(50, 'First name is too long')
		.required('First name is required'),
	lastName: Yup.string()
		.min(2, 'Last name is too short')
		.max(50, 'Last name is too long')
		.required('Last name is required'),
	email: Yup.string().email('Please insert valid email').required('Email name is required')
});

const ContactForm = () => {
	return (
		<div className='container'>
			<Formik
				initialValues={new CotanctFormModel()}
				validationSchema={ContactFormValidationSchema}
				onSubmit={() => {}}
			>
				{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId='firstName'>
							<Form.Control
								value={values.firstName}
								onChange={handleChange}
								onBlur={handleBlur}
								autoComplete='off'
								type='text'
								placeholder='First name'
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
								placeholder='Last name'
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
								placeholder='Company'
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
								placeholder='Email'
							/>
							<FieldErrorMessage>{errors.email && touched.email && errors.email}</FieldErrorMessage>
						</Form.Group>

						<Form.Group controlId='subject'>
							<Form.Control as='select' placeholder='Select a subject'>
								<option>New post suggestion</option>
								<option>Contact the author</option>
								<option>Feedback</option>
								<option>Just saying Hi</option>
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
								placeholder='Enter your text here'
								rows={5}
							/>
							<FieldErrorMessage>{errors.content && touched.content && errors.content}</FieldErrorMessage>
						</Form.Group>

						<Button disabled={isSubmitting} type='submit' className='mb-2'>
							Submit
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
