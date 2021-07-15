import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import styled from 'styled-components';
import Package from '../models/Package';
import PackageDisplay from '../components/Packages/Package';

interface PackagesPageProps {
	packages: Array<Package>;
}

const Packages = (props: PackagesPageProps) => {
	console.log(props);
	return (
		<>
			<Head>
				<title>Dev-Buzz | Open source packages and projects</title>
			</Head>
			<Container className='container'>
				<h1>Open source packages & projects</h1>
				{props.packages.map((packageItem) => {
					return <PackageDisplay package={packageItem} />;
				})}
			</Container>
		</>
	);
};

const Container = styled.div`
	h1 {
		text-align: center;
		width: 100%;
		margin-top: 30px;
		margin-bottom: 50px;
	}
`;

export async function getStaticProps() {
	const packages = JSON.parse(fs.readFileSync(path.join('packages/packages.json'), 'utf-8'));

	return {
		props: {
			packages
		}
	};
}

export default Packages;
