import { useRef, useEffect } from 'react';

interface HereMapProps {
	apiKey: string;
	zoom: number;
	lng: number;
	lat: number;
	height: string;
}

const HereMap = (props: HereMapProps) => {
	const mapRef = useRef();

	useEffect(() => {
		// @ts-ignore
		var platform = new H.service.Platform({
			apikey: props.apiKey
		});

		var maptypes = platform.createDefaultLayers();

		// @ts-ignore
		var map = new H.Map(document.getElementById('mapContainer'), maptypes.vector.normal.map, {
			zoom: 10,
			center: { lng: props.lng, lat: props.lat }
		});
	}, []);

	return <div style={{ height: props.height, width: '100%' }} id='mapContainer' ref={mapRef}></div>;
};

export default HereMap;
