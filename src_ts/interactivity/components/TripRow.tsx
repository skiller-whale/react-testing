import type { Trip } from "../../../server/api.ts";
import {
  calculateDrivingLevel,
  calculateDrivingScore,
} from "../calculations.ts";
import { DrivingLevelDisplay } from "../constants.ts";

type Props = {
  tripNumber: number;
  trip: Trip;
  selectedTrip: Trip | undefined;
  selectTrip: (trip: Trip) => void;
};

const TripRow = ({ tripNumber, trip, selectedTrip, selectTrip }: Props) => {
  const { date, distance, incidents } = trip;
  const drivingScore = calculateDrivingScore(distance, incidents);
  const drivingLevel = calculateDrivingLevel(drivingScore);
  const { color } = DrivingLevelDisplay[drivingLevel];

  return (
    <tr
      role="button"
      tabIndex={0}
      aria-label={`Select trip ${tripNumber}`}
      className={`even:bg-slate-100 cursor-pointer hover:bg-blue-200 ${selectedTrip === trip ? "outline" : ""}`}
      onClick={() => selectTrip(trip)}
    >
      <td className="p-1">{tripNumber}</td>
      <td className="p-1">{date}</td>
      <td className="p-1" data-testid={`distance-${trip.id}`}>{distance}</td>
      <td className="p-1" data-testid={`incidents-${trip.id}`}>{incidents}</td>
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
