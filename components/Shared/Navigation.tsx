import { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import AppRoutes from 'configuration/AppRoutes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MobileNavigationMenu from './MobileNavigationMenu';
import Localization from 'localization/components/Shared/Navigation';

const Navigation = () => {
	const router = useRouter();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [scrolledAboveHeader, setScrolledAboveHeader] = useState(false);

	const handleHamburgerClick = useCallback(() => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	}, [isMobileMenuOpen]);

	const handleScroll = useCallback(() => {
		if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
			setScrolledAboveHeader(true);
		} else {
			setScrolledAboveHeader(false);
		}
	}, []);

	useEffect(() => {
		document.addEventListener('scroll', handleScroll);
		return () => document.removeEventListener('scroll', handleScroll);
	}, []);

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
			<SubNav shrinked={scrolledAboveHeader}>
				<SubNavItem isSelected={router.pathname === AppRoutes.Home}>
					<Link href={AppRoutes.Home}>{Localization.home}</Link>
				</SubNavItem>
				<SubNavItem isSelected={router.pathname === AppRoutes.About}>
					<Link href={AppRoutes.About}>{Localization.about}</Link>
				</SubNavItem>
				<SubNavItem isSelected={router.pathname === AppRoutes.Posts}>
					<Link href={AppRoutes.Posts}>{Localization.posts}</Link>
				</SubNavItem>
				<SubNavItem isSelected={router.pathname === AppRoutes.Packages}>
					<Link href={AppRoutes.Packages}>{Localization.packages}</Link>
				</SubNavItem>
				<SubNavItem isSelected={router.pathname === AppRoutes.Contact}>
					<Link href={AppRoutes.Contact}>{Localization.contact}</Link>
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

interface SubNavItemProps {
	isSelected: boolean;
}

const SubNavItem = styled.div<SubNavItemProps>`
	flex: 1;
	text-align: center;
	cursor: pointer;
	transition: max-height 0.5s;

	background: ${(props) => (props.isSelected ? 'orange' : 'inherit')};

	&:hover {
		background: orange;
	}
`;

interface SubNavProps {
	shrinked: boolean;
}

const SubNav = styled.div<SubNavProps>`
	font-family: 'Staatliches', cursive;
	padding-right: 100px;
	padding-left: 100px;
	display: flex;
	background-color: #4267b2;
	width: 100%;
	max-height: ${(props) => (props.shrinked ? '60px' : '100px')};
	line-height: ${(props) => (props.shrinked ? '60px' : '100px')};
	font-size: ${(props) => (props.shrinked ? '20px' : '30px')};
	color: white;
	position: sticky;
	top: 80px;
	z-index: 10;

	transition: all 0.15s ease-in-out;

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
