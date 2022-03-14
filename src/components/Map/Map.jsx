import React from 'react';
import {Map, Placemark, YMaps} from "react-yandex-maps";


const mapData = {
    center: [59.997019, 30.251657],
    zoom: 15,
};

const coordinates = [
    [59.997019, 30.251657],
];
export const Maps = () => {
    return (
        <YMaps >
            <Map defaultState={mapData}>
                {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
            </Map>
        </YMaps>
    );
};

