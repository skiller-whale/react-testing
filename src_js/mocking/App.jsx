import { useState } from "react";
import * as api from "./api.js";
import DrivingAssessment from "./components/DrivingAssessment.jsx";
import DrivingHistory from "./components/DrivingHistory.jsx";
import TripsProvider, {
  SetTripsProvider,
  SyncTripsProvider,
} from "./context/TripsContext.jsx";

const App = ({ trips: initialTrips }) => {
  const [trips, setTrips] = useState(initialTrips);
  const syncTrips = async () => {
    const trips = await api.fetchTrips();
    setTrips(trips);
  };

  const [tab, setTab] = useState("Assessment");

  return (
    <div className="flex flex-col gap-3 text-slate-800">
      <header className="p-3">
        <h1 className="text-3xl font-semibold">Don't Crash Y-Orca-R!</h1>
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
        <TripsProvider value={trips}>
          <SetTripsProvider value={setTrips}>
            <SyncTripsProvider value={syncTrips}>
              {tab === "Assessment" ? (
                <DrivingAssessment />
              ) : (
                <DrivingHistory />
              )}
            </SyncTripsProvider>
          </SetTripsProvider>
        </TripsProvider>
      </main>
    </div>
  );
};

export default App;
