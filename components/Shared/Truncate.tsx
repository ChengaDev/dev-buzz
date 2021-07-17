import React, { useState, useEffect, useRef, useCallback } from 'react';
import { generateRandomId } from '../helpers/generalHelpers';
import { classname as clx, renderHoverAround } from '../helpers/reactHelpers';

import '../styles/Truncate.scss';

const Truncate = ({ children, tooltip = true, placement = 'top', multiline, className = '' }) => {
	// eslint-disable-next-line no-unused-vars
	const [tooltipId, _] = useState(generateRandomId());
	const divTruncate = useRef(null);
	const [isTruncated, setTruncated] = useState(false);

	const checkOnResize = useCallback(() => {
		if (!divTruncate.current) return;
		setTruncated(divTruncate.current && divTruncate.current.offsetWidth < divTruncate.current.scrollWidth);
	}, []);

	useEffect(() => {
		if (!tooltip) return;
		window.requestAnimationFrame(checkOnResize);
		window.addEventListener('resize', checkOnResize);
		return () => window.removeEventListener('resize', checkOnResize);
	}, [tooltip, checkOnResize]);

	useEffect(() => {
		if (!tooltip) return;
		checkOnResize();
	}, [children, tooltip, checkOnResize]);

	let renderedComponent;
	if (multiline)
		renderedComponent = (
			<div className={clx('div-truncate-multiline', className)} ref={divTruncate}>
				{children}
			</div>
		);
	else
		renderedComponent = (
			<div className={clx('div-truncate', className)} ref={divTruncate}>
				{children}
			</div>
		);

	if (isTruncated)
		renderedComponent = renderHoverAround(renderedComponent, children, {
			tooltipId,
			placement,
			tooltipStyle: { maxWidth: divTruncate.current.offsetWidth },
			tooltipClassName: 'div-truncate-indication'
		});
	return renderedComponent;
};

export default Truncate;
