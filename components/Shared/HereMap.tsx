import { useRef, useEffect } from 'react';

interface HereMapProps {
	apiKey: string;
	zoom: number;
	lng: number;
	lat: number;
}

const HereMap = (props: HereMapProps) => {
	const mapRef = useRef();

	useEffect(() => {
		// @ts-ignore
		var platform = new H.service.Platform({
			apikey: process.env.NEXT_PUBLIC_HERE_MAPS_API_KEY
		});

		var maptypes = platform.createDefaultLayers();

		// @ts-ignore
		var map = new H.Map(document.getElementById('mapContainer'), maptypes.vector.normal.map, {
			zoom: 10,
			center: { lng: props.lng, lat: props.lat }
		});
	}, []);

	return <div style={{ height: '340px', width: '100%' }} id='mapContainer' ref={mapRef}></div>;
};

export default HereMap;
