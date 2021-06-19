import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const WritingMachineTitle = () => {
	const isDeletingRef = useRef(false);
	const [period, setPeriod] = useState<number>(2000);
	const displayedTextRef = useRef('');
	const textElementRef = useRef();
	const loopNumberRef = useRef(0);
	const toRotateRef = useRef([]);

	const handleTick = () => {
		let toRotate = toRotateRef.current || [];
		let i = loopNumberRef.current % toRotate.length;
		let fullTxt = toRotate[i];

		if (isDeletingRef.current) {
			displayedTextRef.current = fullTxt.substring(0, displayedTextRef.current.length - 1);
		} else {
			displayedTextRef.current = fullTxt.substring(0, displayedTextRef.current.length + 1);
		}

		textElementRef.current.innerHTML = '<span class="wrap">' + displayedTextRef.current + '</span>';
		let delta = 300 - Math.random() * 100;

		if (isDeletingRef.current) {
			delta /= 2;
		}

		if (!isDeletingRef.current && displayedTextRef.current === fullTxt) {
			delta = period;
			isDeletingRef.current = true;
		} else if (isDeletingRef.current && displayedTextRef.current === '') {
			isDeletingRef.current = false;
			loopNumberRef.current = loopNumberRef.current + 1;
			delta = 500;
		}

		setTimeout(function () {
			handleTick();
		}, delta);
	};

	useEffect(() => {
		let elements = document.getElementsByClassName('txt-rotate');
		for (let i = 0; i < elements.length; i++) {
			let element = textElementRef.current;
			if (!element) {
				return;
			} else {
				let toRotateValue = element.getAttribute('data-rotate');
				toRotateRef.current = JSON.parse(toRotateValue);
				let periodValue = element.getAttribute('data-period');
				setPeriod(periodValue);
				if (toRotateValue) {
					handleTick();
				}
			}
		}
	}, []);

	return (
		<Container>
			<h1>
				If you love{' '}
				<strong>
					<span
						ref={textElementRef}
						className='txt-rotate'
						data-period='2000'
						data-rotate='[ "Code", "Tech", "Javascript", "React" ]'
					></span>
				</strong>
			</h1>
			<h2>This is the &lt;place&gt; for you.</h2>
		</Container>
	);
};

const Container = styled.div`
	text-align: center;
	font-family: 'Raleway', sans-serif;
	padding: 1em 2em;
	font-size: 18px;
	color: black h1, h2 {
		font-weight: 200;
		margin: 0.4em 0;
	}

	h1 {
		font-size: 3.5em;
	}
	h2 {
		margin-top: 40px;
		color: #888;
		font-size: 2em;
	}

	.txt-rotate > .wrap {
		border-right: 0.08em solid #666;
	}
`;

export default WritingMachineTitle;
