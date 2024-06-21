import { render } from "@testing-library/react";
import type { Trip } from "../../../server/trips.ts";
import TripRow from "./TripRow.tsx";

describe("TripRow component", () => {
  const testTrip: Trip = {
    id: "trip-1",
    confirmed: true,
    date: "1st July 2020",
    distance: 30,
    incidents: 2,
  };

  test.todo("displays trip information correctly");
});
