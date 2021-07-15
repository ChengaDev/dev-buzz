import styled from 'styled-components';
import Package from '../../models/Package';

interface PackageDisplayProps {
	package: Package;
}

const PackageDisplay = (props: PackageDisplayProps) => {
	const { url, npm_url, repo_url } = props.package;

	return (
		<Container>
			<Links>
				{url && (
					<a target='_blank' href={url}>
						<i className='fas fa-link'></i>
					</a>
				)}
				{npm_url && (
					<a target='_blank' href={npm_url}>
						<i className='fab fa-npm'></i>
					</a>
				)}
				<a target='_blank' href={repo_url}>
					<i className='fab fa-github'></i>
				</a>
			</Links>
			<PackageName>{props.package.name}</PackageName>
			<PackageDescription>{props.package.description}</PackageDescription>
			<Author>
				Author: <strong>{props.package.author}</strong>
			</Author>
		</Container>
	);
};

const Links = styled.div`
	position: absolute;
	top: 30px;
	right: 30px;

	@media screen and (max-width: 768px) {
		top: 40px;
	}

	i {
		font-size: 30px;
		margin-left: 20px;
		color: gray;

		@media screen and (max-width: 768px) {
			font-size: 25px;
		}
	}
`;

const Author = styled.div`
	color: #a87878;
	margin-top: 20px;
`;

const PackageName = styled.div`
	font-size: 25px;
	font-weight: bold;
`;

const PackageDescription = styled.div`
	font-size: 18px;
	color: rgba(0, 0, 0, 0.6);
	margin-top: 20px;
`;

const Container = styled.div`
	width: 100%;
	position: relative;
	height: auto;
	background: white;
	margin-bottom: 30px;
	display: flex;
	flex-direction: column;
	border: 1px solid rgba(0, 0, 0, 0.2);
	padding: 30px;
`;

export default PackageDisplay;
