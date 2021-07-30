import React from 'react';
import styled from 'styled-components';
import SocialItem from './SocialItem';
import SocialLink from 'models/SocialLink';
import Localization from 'localization/components/FloatingSocialBox/FloatingSocialBox';

const FloatingSocialBox = () => {
	const facebookLink = new SocialLink(
		'facebook-f',
		Localization.facebookDisplayText,
		'#4267B2',
		'https://www.facebook.com/cgazit/'
	);
	const instagramLink = new SocialLink(
		'instagram',
		Localization.instagramDisplayText,
		'#C13584',
		'https://www.instagram.com/chen_gazit88/'
	);
	const linkedinLink = new SocialLink(
		'linkedin',
		Localization.linkedinDisplayText,
		'#0072B1',
		'https://www.linkedin.com/in/chengazit/'
	);

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

	@media (max-width: 911px) {
		display: none;
	}
`;

export default FloatingSocialBox;
