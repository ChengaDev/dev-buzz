import React from 'react';
import SocialLink from 'models/SocialLink';
import styled from 'styled-components';

interface SocialItemProps {
	item: SocialLink;
}

const SocialItem = (props: SocialItemProps) => {
	return (
		<Container backgroundColor={props.item.backgroundColor}>
			<a target='_blank' href={props.item.url}>
				<i className={`fab fa-${props.item.iconName}`}></i>
			</a>
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

	a {
		display: block;
		color: white;
	}
`;

export default SocialItem;
