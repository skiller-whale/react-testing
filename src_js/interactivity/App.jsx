import { useState } from "react";
import TripsProvider, { SetTripsProvider } from "./TripsState.jsx";
import DrivingAssessment from "./components/DrivingAssessment.jsx";
import DrivingHistory from "./components/DrivingHistory.jsx";
import useCursor from "./hooks/useCursor.js";

const App = ({ trips: initialTrips }) => {
  const [trips, selectedTrip, selectTrip, updateSelectedTrip] =
    useCursor(initialTrips);
  const [tab, setTab] = useState("Assessment");

  return (
    <TripsProvider value={[trips, selectedTrip]}>
      <SetTripsProvider value={[selectTrip, updateSelectedTrip]}>
        <div className="flex flex-col gap-3 text-slate-800">
          <header className="p-3 text-3xl font-semibold">
            <h1>Don't Crash Y-Orca-R!</h1>
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
            {tab === "Assessment" ? <DrivingAssessment /> : <DrivingHistory />}
          </main>
        </div>
      </SetTripsProvider>
    </TripsProvider>
  );
};

export default App;
