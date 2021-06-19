import React from 'react';
import styled from 'styled-components';

interface DataBoxProps {
	data: number;
	title: string;
}

const DataBox = (props: DataBoxProps) => {
	return (
		<Container>
			<Box>
				<Data>{props.data}</Data>
				<Title>{props.title}</Title>
			</Box>
		</Container>
	);
};

const Data = styled.div`
	font-weight: bold;
	font-size: 80px;
`;

const Container = styled.div`
	text-align: center;
	flex-grow: 0;
	flex-basis: 25%;
	margin-bottom: 50px;

	@media only screen and (max-width: 800px) {
		flex-basis: 100%;
	}

	@media (min-width: 800px) and (max-width: 1000px) {
		flex-basis: 50%;
	}
`;

const Box = styled.div`
	box-shadow: 0 1px 6px rgb(0 0 0 / 12%), 0 1px 4px rgb(0 0 0 / 24%);
	width: 200px;
	height: 200px;
	border-radius: 10px;
	background: #fffeed;
	margin: 0 auto;
`;

const Title = styled.div`
	font-size: 25px;
	margin-top: 10px;
`;

export default DataBox;
