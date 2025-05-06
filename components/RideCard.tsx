import { View, Text, Image } from "react-native";
import React from "react";
import { Ride } from "@/types/type";

const RideCard = ({
  ride: {
    destination_latitude,
    destination_address,
    origin_address,
    destination_longitude,
    created_at,
    ride_time,
    driver,
    payment_status,
  },
}: {
  ride: Ride;
}) => {
  return (
    <View className="flex flex-row items-center justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 mb-3">

        <View className="flex flex-row items-center justify-between p-3">
            <View className="flex flex-row items-center justify-between">
                <Image source={{uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${destination_longitude},${destination_latitude}&zoom=14&apikey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`}} className="w-[80px] h-[90px] rounded-lg"/>
            </View>
        </View>
      <Text className="">{driver.first_name}</Text>
    </View>
  );
};

export default RideCard;
