import { useState } from "react";
import ApiProvider from "../context/ApiContext.jsx";
import TripsProvider, { SetTripsProvider } from "../context/TripsContext.jsx";
import mockApi from "./mockApi.js";

export default (testTrips) =>
  ({ children }) => {
    const [trips, setTrips] = useState(testTrips);

    return (
      <TripsProvider value={trips}>
        <SetTripsProvider value={setTrips}>{children}</SetTripsProvider>
      </TripsProvider>
    );
  };
