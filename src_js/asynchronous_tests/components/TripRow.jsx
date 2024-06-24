import { useState } from "react";
import { useSetTripsContext } from "../TripsState.jsx";
import * as api from "../api.js";
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

  const setTrips = useSetTripsContext();

  const [confirming, setConfirming] = useState(false);
  const confirm = async () => {
    setConfirming(true);
    const confirmed = await api.confirmTrip(trip.id);
    setTrips((trips) =>
      trips.map((trip) => (trip.id === confirmed.id ? confirmed : trip))
    );
    setConfirming(false);
  };

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
      <td>
        <button
          className={`${trip.confirmed ? "bg-green-600" : "bg-blue-700"} text-white px-2 py-1 w-28`}
          aria-label={`Confirm trip ${trip.id}`}
          disabled={confirming || trip.confirmed}
          onClick={confirm}
        >
          {confirming ? "Confirming..." : trip.confirmed ? "Confirmed" : "Confirm"}
        </button>
      </td>
    </tr>
  );
};

export default TripRow;
