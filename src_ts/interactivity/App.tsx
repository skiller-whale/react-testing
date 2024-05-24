import { useState } from "react";
import type { Trip } from "../../server/api.ts";
import DrivingAssessment from "./components/DrivingAssessment.tsx";
import DrivingHistory from "./components/DrivingHistory.tsx";
import useCursor from "./hooks/useCursor.ts";
import TripsProvider, { SetTripsProvider } from "./TripsState.tsx";

type Props = {
  trips: Trip[];
};

const App = ({ trips: initialTrips }: Props) => {
  const [trips, selectedTrip, selectTrip, updateSelectedTrip] =
    useCursor(initialTrips);
  const [tab, setTab] = useState<"Assessment" | "Trips">("Assessment");

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
            {tab === "Assessment" ? (
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
