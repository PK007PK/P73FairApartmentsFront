import React, { useRef, useEffect, useState } from "react"
import mapboxgl from "mapbox-gl"
import "styles/mapbox-gl.css"

import { CardMapStyle } from "./CardMapSmall.style";
// import { MapMarker } from "components/atoms/MapMarker/MapMarker"

const MAPBOX_TOKEN = "pk.eyJ1IjoicGswMDdwayIsImEiOiJjbDR6NmtsZDIyNmxnM2ttbDA0OWprd244In0.R7-lAWotAL2foidWgJGAaA";

interface Props {
    lat: number;
    lon: number;
}

export const CardMapSmall: React.FunctionComponent<Props> = (props): JSX.Element => {
    const {lat, lon} = props;

    const mapContainerRef = useRef(null);
    const [map, setMap] = useState(null);

    useEffect(() => {
        const map: mapboxgl = new mapboxgl.Map({
          container: mapContainerRef.current,
          accessToken: MAPBOX_TOKEN,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [lon, lat],
          zoom: 10,
        })

        const el = document.createElement('div');
        el.className = 'marker';
        new mapboxgl.Marker(el).setLngLat([lon, lat]).addTo(map);

        map.addControl(new mapboxgl.NavigationControl(), "top-right")
    
        setMap(map)
    
        return () => map.remove()
    }, []);

    return (
        <CardMapStyle ref={mapContainerRef}>
            {/* <MapMarker map={map} lat={lat} lon={lon}/> */}
        </CardMapStyle>
    )
}