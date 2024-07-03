import { useState } from "react";
import mockApi from "./mockApi.js";
import ApiProvider from "../context/ApiContext.jsx";
import TripsProvider, { SetTripsProvider } from "../context/TripsContext.jsx";

// eslint-disable-next-line react-refresh/only-export-components
export default (testTrips) =>
  ({ children }) => {
    const [trips, setTrips] = useState(testTrips);

    return (
      <TripsProvider value={trips}>
        <SetTripsProvider value={setTrips}>{children}</SetTripsProvider>
      </TripsProvider>
    );
  };
