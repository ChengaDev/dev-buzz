import styled from 'styled-components';
import Head from 'next/head';

const Posts = () => {
	return (
		<>
			<Head>
				<title>Dev-Buzz | Posts</title>
			</Head>
			<Container>
				<h1>Posts</h1>
			</Container>
		</>
	);
};

const Container = styled.div`
	h1 {
		text-align: center;
		width: 100%;
		margin-top: 30px;
	}
`;


export default Posts;
