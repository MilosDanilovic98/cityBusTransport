import {StyleSheet, Text, View} from 'react-native';
import MapView, {Geojson, Polyline} from 'react-native-maps';
import {useLayoutEffect, useRef, useState} from "react";
import {MAP_STYLE} from "./mapUtils/mapStyle";
import {BUS_ROUTE_7} from "./mapUtils/busRoutes/busRoute7";

export default function Page() {
    const [strokeWidth,setStrokeWidth]=useState(12)


    const mapRef=useRef<MapView>()

    useLayoutEffect(()=>{
        if (mapRef.current)
            {
                mapRef.current.setMapBoundaries({latitude: 42.467391, longitude:  19.315265},{latitude: 42.410239,  longitude: 19.188079})
            }
    })

   let bla=async ()=>{
       let test = await mapRef.current.getCamera()
       setStrokeWidth(test.zoom)

   }
    console.log(strokeWidth)
    return (
        <View>

            <MapView
                customMapStyle={MAP_STYLE}
                rotateEnabled={false}
                onRegionChangeComplete={bla}
                style={styles.map}
              // scrollEnabled={false}
                region={{
                    latitude: 42.4304,
                    longitude: 19.2594,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
                minZoomLevel={12}
                maxZoomLevel={19.5}
                ref={mapRef}
            >
                <Geojson
                    tappable={true}
                    title={"TESTTTT"}
                    geojson={BUS_ROUTE_7}
                    strokeColor="red"
                    fillColor="green"
                    strokeWidth={strokeWidth/5}
                    key={strokeWidth}
                />

            </MapView>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width:"100%",
        height:"95%",
    }
});
