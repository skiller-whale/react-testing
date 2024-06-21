import { useEffect, useState } from "react";
import type { Trip } from "../../server/trips.ts";
import DrivingAssessment from "./components/DrivingAssessment.tsx";
import DrivingHistory from "./components/DrivingHistory.tsx";

const App = () => {
  const [loadingTrips, setLoadingTrips] = useState(true);
  const [trips, setTrips] = useState<Trip[]>([]);
  const [tab, setTab] = useState<"Assessment" | "Trips">("Assessment");

  useEffect(() => {
    const loadTrips = async () => {
      const response = await fetch("/api/trips");
      const { trips } = await response.json();
      setLoadingTrips(false);
      setTrips(trips);
    };

    loadTrips();
  }, []);

  return (
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
        {loadingTrips ? (
          <p className="p-6">Loading...</p>
        ) : trips.length === 0 ? (
          <p className="p-6">No trips available.</p>
        ) : tab === "Assessment" ? (
          <DrivingAssessment trips={trips} />
        ) : (
          <DrivingHistory trips={trips} />
        )}
      </main>
    </div>
  );
};

export default App;
