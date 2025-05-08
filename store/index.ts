import { LocationStore } from "@/types/type";
import { create } from "zustand";

const useLocationStore = create<LocationStore>((set) => ({
  userAddress: null,
  userLongitude: null,
  userLatitude: null,
  destinationLongitude: null,
  destinationLatitude: null,
  destinationAddress: null,
  setUserAddress: ({
    address,
    longitude,
    latitude,
  }: {
    latitude: number;
    address: number;
    longitude: number;
  }) =>
    set(() => ({
      userAddress: address,
      userLongitude: longitude,
      userLatitude: latitude,
    })),

  setDestinationLocation: ({
    address,
    longitude,
    latitude,
  }: {
    latitude: number;
    address: number;
    longitude: number;
  }) =>
    set(() => ({
      destinationAddress: address,
      destinationLongitude: longitude,
      destinationLatitude: latitude,
    })),
}));
