import { useState, type PropsWithChildren } from "react";
import type { Trip } from "../../../server/trips.ts";
import ApiProvider from "../context/ApiContext.tsx";
import TripsProvider, { SetTripsProvider } from "../context/TripsContext.tsx";
import mockApi from "./mockApi.ts";

// eslint-disable-next-line react-refresh/only-export-components
export default (testTrips: Trip[]) =>
  ({ children }: PropsWithChildren) => {
    const [trips, setTrips] = useState(testTrips);

    return (
      <TripsProvider value={trips}>
        <SetTripsProvider value={setTrips}>{children}</SetTripsProvider>
      </TripsProvider>
    );
  };
