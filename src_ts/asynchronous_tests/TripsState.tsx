import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { Trip } from "../../server/trips.ts";

const TripsContext = createContext<Trip[]>([]);

const SetTripsContext = createContext<Dispatch<SetStateAction<Trip[]>>>(
  () => {}
);

export default TripsContext.Provider;

export const SetTripsProvider = SetTripsContext.Provider;

export const useTripsContext = () => useContext(TripsContext);

export const useSetTripsContext = () => useContext(SetTripsContext);
