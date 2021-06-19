import React from 'react';
import SocialLink from '../../models/SocialLink';
import styled from 'styled-components';

interface SocialItemProps {
	item: SocialLink;
}

const SocialItem = (props: SocialItemProps) => {
	return (
		<Container backgroundColor={props.item.backgroundColor}>
			<i className={`fab fa-${props.item.iconName}`}></i>
		</Container>
	);
};

interface ContainerProps {
	backgroundColor: string;
}

const Container = styled.div<ContainerProps>`
	text-align: center;
	background-color: ${(props) => props.backgroundColor};
	height: 60px;
	line-height: 60px;
	font-size: 25px;
	width: 100%;
	cursor: pointer;

	i {
		color: white;
	}
`;

export default SocialItem;
