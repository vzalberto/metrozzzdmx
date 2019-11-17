import React, { useState } from 'react'
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const INITIAL_VIEWPORT = {
	latitude: 19.4320281,
	longitude: -99.1336334,
	zoom: 9
}

const handleMapClick = () => {

}

const AreaMetropolitana = () => {

	const [viewport, setViewport] = useState(INITIAL_VIEWPORT);

	return (
				<ReactMapGL 
				onClick={handleMapClick}
				width="100vw"
				height="100vh"
				mapStyle="mapbox://styles/mapbox/satellite-v9"
				{...viewport}
				mapboxApiAccessToken = "pk.eyJ1IjoidnphbGJlcnRvIiwiYSI6ImNrMjllZzNjdTFtZXMzZXRjaHJ6Z2NlNW4ifQ.0DS64cOS3tH51tPaajudew"
				onViewportChange={(viewport)=>setViewport(viewport)}
			></ReactMapGL>
		)
}

export default AreaMetropolitana