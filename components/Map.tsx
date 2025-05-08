import { View, Text, Platform } from "react-native";
import React from "react";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => {

  const region = {

  }

  return (
    <View className="rounded-2xl">
      <MapView
        provider={PROVIDER_DEFAULT}
        className="w-[500px] h-full rounded-2xl"
        tintColor="black"
        style={{width: 380 , height: 300 , borderRadius: 60}}
        mapType={Platform.OS === "ios" ? "mutedStandard" : "standard"}
        showsPointsOfInterest={false}
        showsUserLocation={true}
        userInterfaceStyle="light"
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
      <Text className="">Map</Text>
      </MapView>
    </View>
    
  );
};

export default Map;
