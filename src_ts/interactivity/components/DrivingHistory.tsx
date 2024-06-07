import { useSetTripsContext, useTripsContext } from "../TripsState.tsx";
import TripRow from "./TripRow.tsx";

const DrivingHistory = () => {
  const [trips, selectedTrip] = useTripsContext();
  const [selectTrip, updateSelectedTrip] = useSetTripsContext();

  return (
    <>
      <header className="p-6 bg-slate-100 text-xl font-semibold">
        <h3>Your Trips</h3>
      </header>
      <main className="p-6 flex flex-col gap-8">
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
            </tr>
          </thead>
          <tbody>
            {trips.map((trip, index) => (
              <TripRow
                key={trip.id}
                tripNumber={index + 1}
                trip={trip}
                selectedTrip={selectedTrip}
                selectTrip={selectTrip}
              />
            ))}
          </tbody>
        </table>
        <div>
          <div className="flex flex-col gap-3">
            <h4 className="text-lg font-semibold">
              Selected Trip {selectedTrip ? `: ${selectedTrip.date}` : null}
            </h4>
            {selectedTrip ? (
              <>
                <div className="flex items-baseline justify-between gap-6">
                  <label htmlFor="distance" className="font-semibold w-40">
                    Distance
                  </label>
                  <input
                    id="distance"
                    type="number"
                    className="border-2 border-slate-300 rounded-md p-1 flex-1 text-right"
                    value={selectedTrip.distance}
                    min="1"
                    onChange={(event) => {
                      const distance = Number(event.target.value);
                      updateSelectedTrip({ ...selectedTrip, distance });
                    }}
                  />
                </div>
                <div className="flex items-baseline justify-between gap-6">
                  <label htmlFor="incidents" className="font-semibold w-40">
                    Incidents
                  </label>
                  <input
                    id="incidents"
                    type="number"
                    className="border-2 border-slate-300 rounded-md p-1 flex-1 text-right"
                    value={selectedTrip.incidents}
                    min="0"
                    onChange={(event) => {
                      const incidents = Number(event.target.value);
                      updateSelectedTrip({ ...selectedTrip, incidents });
                    }}
                  />
                </div>
              </>
            ) : (
              <p>Select a trip to edit the distance or number of incidents.</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default DrivingHistory;
