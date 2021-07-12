import React from 'react';

interface GoogleMapImageProps {
	lon: number;
	lat: number;
	zoom: number;
	height: number;
	width: number;
	apiKey: string;
}

const GoogleMapImage = (props: GoogleMapImageProps) => {
	return (
		<img
			style={{ width: '100%', height: '100%' }}
			src={`https://maps.googleapis.com/maps/api/staticmap?center=${props.lat},${props.lon}&zoom=${props.zoom}&size=${props.width}x${props.height}&key=${props.apiKey}`}
		/>
	);
};

export default GoogleMapImage;
