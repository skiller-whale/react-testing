import { calculateDrivingAssessment } from "../calculations.js";
import { DrivingLevelDisplay } from "../constants.js";
import { useTripsContext } from "../TripsState.jsx";

const DrivingAssessment = () => {
  const trips = useTripsContext();
  const {
    drivingScore,
    drivingLevel,
    tripsCount,
    incidentsCount,
    totalDistance,
  } = calculateDrivingAssessment(trips);
  const { summary, color } = DrivingLevelDisplay[drivingLevel];

  return (
    <>
      <header className="px-6 py-5 bg-slate-100 flex justify-between items-baseline text-xl font-semibold">
        <h3>Overall Driving Assessment</h3>
        <p className="px-3 py-1 rounded" style={{ backgroundColor: color }}>
          {drivingLevel}
        </p>
      </header>
      <main className="p-6 flex flex-col gap-6">
        <p>{summary}</p>
        <table>
          <tbody>
            <tr className="border-b border-slate-300">
              <th scope="row" className="py-1 text-left">
                Total Trips
              </th>
              <td className="py-1 text-right">{tripsCount}</td>
            </tr>
            <tr className="border-b border-slate-300">
              <th scope="row" className="py-1 text-left">
                Total Distance
              </th>
              <td className="py-1 text-right">{totalDistance} miles</td>
            </tr>
            <tr className="border-b border-slate-300">
              <th scope="row" className="py-1 text-left">
                Number of Incidents
              </th>
              <td className="py-1 text-right">{incidentsCount}</td>
            </tr>
            <tr className="border-b border-slate-300">
              <th scope="row" className="py-1 text-left">
                Score
              </th>
              <td className="py-1 text-right">{drivingScore}</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
};

export default DrivingAssessment;
