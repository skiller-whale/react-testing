import { useState, type PropsWithChildren } from "react";
import type { Trip } from "../../../server/trips.ts";
import TripsProvider, { SetTripsProvider } from "../TripsState.tsx";

const MockTripsProviders =
  (testTrips: Trip[]) =>
  ({ children }: PropsWithChildren) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [trips, setTrips] = useState(testTrips);

    return (
      <TripsProvider value={trips}>
        <SetTripsProvider value={setTrips}>{children}</SetTripsProvider>
      </TripsProvider>
    );
  };

export default MockTripsProviders;
