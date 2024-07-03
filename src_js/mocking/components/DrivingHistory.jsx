import * as api from "../api.js";
import { useApi } from "../context/ApiContext.jsx";
import { useSetTrips, useTrips } from "../context/TripsContext.jsx";
import TripRow from "./TripRow.jsx";

const DrivingHistory = () => {
  const trips = useTrips();
  const setTrips = useSetTrips();

  const confirmTrip = async (tripId) => {
    const modifiedTrip = await api.confirmTrip(tripId);
    setTrips((trips) =>
      trips.map((trip) => (trip.id === tripId ? modifiedTrip : trip))
    );
  };

  return (
    <>
      <header className="p-6 bg-slate-100 text-xl font-semibold">
        <h3>Your Trips</h3>
      </header>
      <main className="p-6 flex flex-col gap-6">
        <table>
          <thead>
            <tr className="bg-slate-300">
              <th scope="col" className="p-1 text-left">
                #
              </th>
              <th scope="col" className="p-1 text-left">
                Date
              </th>
              <th scope="col" className="p-1 text-left">
                Distance (miles)
              </th>
              <th scope="col" className="p-1 text-left">
                Incidents
              </th>
              <th scope="col" className="p-1 text-left">
                Score
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {trips.map((trip, index) => (
              <TripRow
                key={trip.id}
                trip={trip}
                tripNumber={index + 1}
                confirmTrip={confirmTrip}
              />
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default DrivingHistory;
