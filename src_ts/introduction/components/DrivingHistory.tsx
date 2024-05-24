import type { Trip } from "../../../server/api.ts";
import TripRow from "./TripRow.tsx";

type Props = {
  trips: Trip[];
};

const DrivingHistory = ({ trips }: Props) => {
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
            </tr>
          </thead>
          <body>
            {trips.map((trip, index) => (
              <TripRow key={trip.id} trip={trip} tripNumber={index + 1} />
            ))}
          </body>
        </table>
      </main>
    </>
  );
};

export default DrivingHistory;
