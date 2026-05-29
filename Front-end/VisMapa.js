import React, { useState, useEffect } from 'react';
import { Platform, View, StyleSheet,alert } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import { Text } from 'react-native-elements';
//import MapView from 'react-native-maps'
import MapView, { Marker } from "react-native-maps";

const VisMapa = ({ route, navigation }) => {

   const [region, setRegion] = useState({

    latitude: route.params.lat,
    longitude: route.params.lon,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,

  });
   
    return (
        <MapView
        style={{ flex: 1 }}
        region={region}
        onRegionChangeComplete={region => setRegion(region)}
      >
        <Marker coordinate={{ 
          latitude:route.params.lat, 
          longitude:route.params.lon }} />
      </MapView>
    );
  };

  
  export default VisMapa;


  