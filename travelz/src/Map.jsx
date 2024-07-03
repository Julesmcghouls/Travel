import React, { useEffect, useRef } from "react";
import tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

const Map = () => {
    const mapElement = useRef(null);

    useEffect(() => {
        const map = tt.map({
            key: "b805ed21-a42c-418b-8cbf-da915bf679f7",
            container: mapElement.current,
            style: "tomtom://vector/1/basic-main", 
        });
        map.addControl(new tt.NavigationControl());

    return () => map.remove();
}, []);

return <div id="map" ref={mapElement} style={{ height: '100vh', width: '100vw' }}></div>;
};

export default Map;
