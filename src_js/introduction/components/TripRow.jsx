import {
  calculateDrivingLevel,
  calculateDrivingScore,
} from "../calculations.js";
import { DrivingLevelDisplay } from "../constants.js";

const TripRow = ({ tripNumber, trip }) => {
  const { date, distance, incidents } = trip;
  const drivingScore = calculateDrivingScore(distance, incidents);
  const drivingLevel = calculateDrivingLevel(drivingScore);
  const { color } = DrivingLevelDisplay[drivingLevel];

  return (
    <tr className="even:bg-slate-100">
      <td className="p-1">{tripNumber}</td>
      <td className="p-1">{date}</td>
      <td className="p-1">{distance}</td>
      <td className="p-1">{incidents}</td>
      <td className="p-1">
        <span
          className="w-8 h-8 flex justify-center items-center rounded-full"
          style={{ background: color }}
        >
          {drivingScore}
        </span>
      </td>
    </tr>
  );
};

export default TripRow;
