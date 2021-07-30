import styled from 'styled-components';
import AppRoutes from 'configuration/AppRoutes';
import Link from 'next/link';
import Localization from 'localization/components/Shared/Navigation';

interface MobileNavigationMenuProps {
	currentRoute: string;
	isOpen: boolean;
	onSelect: () => void;
}

const MobileNavigationMenu = (props: MobileNavigationMenuProps) => {
	return (
		<Container isOpen={props.isOpen}>
			<NavOption onClick={props.onSelect} isSelected={props.currentRoute === AppRoutes.Home}>
				<Link href={AppRoutes.Home}>{Localization.home}</Link>
			</NavOption>
			<NavOption onClick={props.onSelect} isSelected={props.currentRoute === AppRoutes.About}>
				<Link href={AppRoutes.About}>{Localization.about}</Link>
			</NavOption>
			<NavOption onClick={props.onSelect} isSelected={props.currentRoute === AppRoutes.Posts}>
				<Link href={AppRoutes.Posts}>{Localization.posts}</Link>
			</NavOption>
			<NavOption onClick={props.onSelect} isSelected={props.currentRoute === AppRoutes.Packages}>
				<Link href={AppRoutes.Packages}>{Localization.packages}</Link>
			</NavOption>
			<NavOption onClick={props.onSelect} isSelected={props.currentRoute === AppRoutes.Contact}>
				<Link href={AppRoutes.Contact}>{Localization.contact}</Link>
			</NavOption>
		</Container>
	);
};

interface ContainerProps {
	isOpen: boolean;
}

interface NavOptionProps {
	isSelected: boolean;
}

const Container = styled.div<ContainerProps>`
	font-family: 'Staatliches', cursive;
	width: 100%;
	position: fixed;
	z-index: 1;
	overflow: hidden;
	max-height: ${(props) => (props.isOpen ? '300px' : '0')};
	height: ${(props) => (props.isOpen ? '300px' : '0')};
	transition: all 0.25s;
`;

const NavOption = styled.div<NavOptionProps>`
	text-align: center;
	font-size: 20px;
	opacity: 1;
	background: ${(props) => (props.isSelected ? 'orange' : '#6b92c9')};
	border: none;
	margin-top: -1px;
	line-height: 60px;
	height: 60px;
	width: 100%;

	a {
		color: white;
		display: block;
	}
`;

export default MobileNavigationMenu;
