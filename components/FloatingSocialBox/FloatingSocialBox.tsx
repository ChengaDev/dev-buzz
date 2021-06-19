import React from 'react';
import styled from 'styled-components';
import SocialItem from './SocialItem';
import SocialLink from '../../models/SocialLink';

const FloatingSocialBox = () => {
	const facebookLink = new SocialLink('facebook-f', 'Facebook', '#4267B2');
	const instagramLink = new SocialLink('instagram', 'Instagram', '#C13584');
	const linkedinLink = new SocialLink('linkedin', 'LinkedIn', '#0072B1');

	return (
		<Container>
			<SocialItem item={facebookLink} />
			<SocialItem item={instagramLink} />
			<SocialItem item={linkedinLink} />
		</Container>
	);
};

const Container = styled.div`
	height: 180px;
	width: 50px;
	position: fixed;
	top: 30%;
	left: 0;
`;

export default FloatingSocialBox;
