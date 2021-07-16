import styled from 'styled-components';
import Head from 'next/head';
import ContactForm from '../components/Contact/ContactForm';
import HereMap from '../components/Shared/HereMap';

const Contact = () => {
	return (
		<Container>
			<Head>
				<title>Dev-Buzz | Contact</title>
			</Head>
			<div>
				<h1>Contact us</h1>
				<div className='row'>
					<FormContainer className='col-sm-12 col-md-6'>
						<ContactForm />
					</FormContainer>
					<ContactMethodsContainer className='col-sm-12 col-md-6'>
						<ContactMeText>
							<HereMap
								lng={34.870766}
								lat={32.184448}
								zoom={8}
								apiKey={process.env.NEXT_PUBLIC_HERE_MAPS_API_KEY}
								height='340px'
							/>
						</ContactMeText>
						<EmailContactMethod>
							<div>You can also reach me at</div>
							<EmailAddress>gazit.chen@gmail.com</EmailAddress>
						</EmailContactMethod>
					</ContactMethodsContainer>
				</div>
			</div>
		</Container>
	);
};

const Container = styled.div`
	margin: 0 auto;
	margin-top: 30px;
	max-width: 1000px;
	padding-right: 30px;
	padding-left: 30px;

	h1 {
		margin-bottom: 30px;
		width: 100%;
		text-align: center;
	}
`;

const ContactMethodsContainer = styled.div`
	padding-left: 15px;
	padding-right: 15px;

	@media (max-width: 767px) {
		padding-left: 0px;
		padding-right: 0px;
	}
`;

const EmailAddress = styled.div`
	font-size: 30px;
	font-weight: bold;
`;

const ContactMethodBox = styled.div`
	text-align: center;
	background: white;
`;

const EmailContactMethod = styled(ContactMethodBox)`
	height: 200px;
	padding-top: 65px;
	cursor: pointer;
	border: 1px solid rgba(0, 0, 0, 0.2);
	margin-top: 15px;
`;

const ContactMeText = styled(ContactMethodBox)`
	height: 340px;
`;

const FormContainer = styled.div`
	padding: 30px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 0px;
	background-color: white;
	margin-bottom: 15px;

	button {
		margin-top: 30px;
		width: 100%;
	}
`;

export default Contact;
