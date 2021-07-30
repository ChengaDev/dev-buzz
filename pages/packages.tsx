import packagesApi from 'api/packages';
import Head from 'next/head';
import styled from 'styled-components';
import Package from 'models/Package';
import PackageDisplay from 'components/Packages/Package';
import MetaTitleLocalization from 'localization/MetaTitles';

interface PackagesPageProps {
	packages: Array<Package>;
}

const Packages = (props: PackagesPageProps) => {
	return (
		<>
			<Head>
				<title>{MetaTitleLocalization.baseTitle.replace('{pageTitle}', MetaTitleLocalization.packages)}</title>
			</Head>
			<Container className='container'>
				<h1>Open source packages & projects</h1>
				{props.packages.map((packageItem) => {
					return <PackageDisplay key={packageItem.name} package={packageItem} />;
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
	return packagesApi.getPackages();
}

export default Packages;
