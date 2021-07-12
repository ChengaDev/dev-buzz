import { useState, useCallback } from 'react';
import styled from 'styled-components';
import AppRoutes from '../../configuration/AppRoutes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MobileNavigationMenu from './MobileNavigationMenu';

const Navigation = () => {
	const router = useRouter();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleHamburgerClick = useCallback(() => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	}, [isMobileMenuOpen]);

	return (
		<>
			<NavBar className='navbar'>
				<img src='/logo.png' alt='dev-buzz' />
				<MobileMenuIcon onClick={handleHamburgerClick}>
					<i className='fas fa-bars'></i>
				</MobileMenuIcon>
			</NavBar>
			<MobileNavigationMenu
				onSelect={handleHamburgerClick}
				isOpen={isMobileMenuOpen}
				currentRoute={router.pathname}
			/>
			<SubNav>
				<SubNavItem isSelected={router.pathname === AppRoutes.Home}>
					<Link href={AppRoutes.Home}>Home</Link>
				</SubNavItem>
				<SubNavItem isSelected={router.pathname === AppRoutes.About}>
					<Link href={AppRoutes.About}>About</Link>
				</SubNavItem>
				<SubNavItem isSelected={router.pathname === AppRoutes.Posts}>
					<Link href={AppRoutes.Posts}>Posts</Link>
				</SubNavItem>
				<SubNavItem isSelected={router.pathname === AppRoutes.Packages}>
					<Link href={AppRoutes.Packages}>Packages</Link>
				</SubNavItem>
				<SubNavItem isSelected={router.pathname === AppRoutes.Contact}>
					<Link href={AppRoutes.Contact}>Contact</Link>
				</SubNavItem>
			</SubNav>
		</>
	);
};

const NavBar = styled.div`
	z-index: 10;
	height: 80px;
	width: 100%;
	position: sticky;
	top: 0;
	background: lightblue;
`;

const MobileMenuIcon = styled.div`
	display: none;
	position: relative;
	right: 30px;
	z-index: 11;
	cursor: pointer;
	margin-top: 6px;

	@media (max-width: 911px) {
		display: block;
	}

	i {
		font-size: 30px;
		color: white;
	}
`;

interface SubNavProps {
	isSelected: boolean;
}

const SubNavItem = styled.div<SubNavProps>`
	flex: 1;
	text-align: center;
	cursor: pointer;
	transition: all 0.5s;

	background: ${(props) => (props.isSelected ? 'orange' : 'inherit')};

	&:hover {
		background: orange;
	}
`;

const SubNav = styled.div`
	font-family: 'Staatliches', cursive;
	padding-right: 100px;
	padding-left: 100px;
	display: flex;
	background-color: #4267b2;
	height: 100px;
	line-height: 100px;
	width: 100%;
	font-size: 30px;
	color: white;
	position: sticky;
	top: 80px;
	z-index: 10;

	a {
		color: white;
		display: block;
		text-decoration: none;
	}

	@media (max-width: 911px) {
		display: none;
	}
`;

export default Navigation;
