import { useEffect, useState } from "react";
import type { Trip } from "../../server/trips.ts";
import TripsProvider, { SetTripsProvider } from "./TripsState.tsx";
import * as api from "./api.ts";
import DrivingAssessment from "./components/DrivingAssessment.tsx";
import DrivingHistory from "./components/DrivingHistory.tsx";

const App = () => {
  const [loadingTrips, setLoadingTrips] = useState(true);
  const [trips, setTrips] = useState<Trip[]>([]);
  const loadTrips = async () => {
    setLoadingTrips(true);
    const trips = await api.fetchTrips();
    setLoadingTrips(false);
    setTrips(trips);
  };
  const resetTrips = async () => {
    setLoadingTrips(true);
    const trips = await api.resetTrips();
    setLoadingTrips(false);
    setTrips(trips);
  };
  useEffect(() => {
    loadTrips();
  }, []);

  const [tab, setTab] = useState<"Assessment" | "Trips">("Assessment");

  return (
    <TripsProvider value={trips}>
      <SetTripsProvider value={setTrips}>
        <div className="flex flex-col gap-3 text-slate-800">
          <header className="p-3 text-3xl font-semibold flex justify-between items-baseline">
            <h1>Don't Crash Y-Orca-R!</h1>
            <button
              className="bg-blue-700 text-white px-3 py-1"
              onClick={resetTrips}
            >
              reset
            </button>
          </header>
          <nav className="border-slate-200 border-b">
            <button
              role="link"
              className={`border-b-2 px-4 py-2 text-left hover:bg-blue-100 ${tab === "Assessment" ? "text-blue-700 border-blue-700" : "border-transparent"}`}
              onClick={() => setTab("Assessment")}
            >
              Assessment
            </button>
            <button
              role="link"
              className={`border-b-2 px-4 py-2 text-left hover:bg-blue-100 ${tab === "Trips" ? "text-blue-700 border-blue-700" : "border-transparent"}`}
              onClick={() => setTab("Trips")}
            >
              Trips
            </button>
          </nav>
          <main className="shadow">
            {loadingTrips ? (
              <p className="p-6">Loading...</p>
            ) : trips.length === 0 ? (
              <p className="p-6">No trips available.</p>
            ) : tab === "Assessment" ? (
              <DrivingAssessment />
            ) : (
              <DrivingHistory />
            )}
          </main>
        </div>
      </SetTripsProvider>
    </TripsProvider>
  );
};

export default App;
