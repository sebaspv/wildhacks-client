import React from "react";
import { Map, Marker, GoogleApiWrapper} from "google-maps-react";
import {  } from '@chakra-ui/icons'
import { Container } from '@chakra-ui/react'

import { selectAnimals } from '../Redux/animalSlice';
import { useSelector } from 'react-redux'

function BlogPage({ google  }) {

    const posts = useSelector(selectAnimals)

    console.log(posts)
    return (
        <div style={{ width: '10rem', height: '40rem', padding: 10}}>
            <Map google={google} zoom={8} style={mapStyles} initialCenter={{ lat: 34.1003229, lng: -118.341 }}>
            {posts.map((i, k) => {
                console.log(i.geolocation);
                return (
                    <Marker
                        position={{ lat: i.geolocation.lat, lng: i.geolocation.long }}
                    />
                );
            })}
        </Map>
        </div>
    )
}

const mapStyles = {
    width: "100%",
    height: "100%"
};


export default GoogleApiWrapper({
    apiKey: "AIzaSyDX5b2eROUXhaHcVDNiX4yAnipp3d7898Q",
})(BlogPage)