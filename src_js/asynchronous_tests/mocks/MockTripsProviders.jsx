import { useState } from "react";
import TripsProvider, { SetTripsProvider } from "../TripsState.jsx";

const MockTripsProviders =
  (testTrips) =>
  ({ children }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [trips, setTrips] = useState(testTrips);

    return (
      <TripsProvider value={trips}>
        <SetTripsProvider value={setTrips}>{children}</SetTripsProvider>
      </TripsProvider>
    );
  };

export default MockTripsProviders;
