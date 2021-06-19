import React from 'react';
import styled from 'styled-components';
import Localization from '../../localization/Layout';

const SideBar = () => {
	return (
		<Container id='sidebar'>
			<Link>
				<a href='/'>{Localization.links.home}</a>
			</Link>
			<Link>
				<a href='/about'>{Localization.links.about}</a>
			</Link>
			<Link>
				<a href='/posts'>{Localization.links.posts}</a>
			</Link>
			<Link>
				<a href='/contact'>{Localization.links.contact}</a>
			</Link>
		</Container>
	);
};

const Link = styled.div`
	text-align: center;
	height: 50px;
	line-height: 50px;
	border-bottom: 1px solid #97adbf;

	a {
		color: #31496b !important;
	}

	&:hover {
		background: #1664a8;
		cursor: pointer;

		a {
			color: white !important;
			text-decoration: none;
		}
	}
`;

const Container = styled.div`
	min-width: 200px;
	height: 100%;
	background: lightgray;
	position: relative;
	left: 0;
	box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
`;

export default SideBar;
