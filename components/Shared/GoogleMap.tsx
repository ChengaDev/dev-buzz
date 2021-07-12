import { useEffect, useRef } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import { Loader } from '@googlemaps/js-api-loader';

const GoogleMap = (center: any, zoom: number) => {
	const googlemap = useRef(null);

	useEffect(() => {
		const loader = new Loader({
			apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
			version: 'weekly',
			libraries: ['places']
		});
		let map;
		loader.load().then(() => {
			// @ts-ignore
			map = new google.maps.Map(document.getElementById('map'), {
				center: { lat: 32.184448, lng: 34.870766 },
				zoom: 8
			});
		});
	});
	return <MapElement id='map' ref={googlemap} />;
};

const MapElement = styled.div`
	height: 100%;
	width: 100%;
`;

export default GoogleMap;
