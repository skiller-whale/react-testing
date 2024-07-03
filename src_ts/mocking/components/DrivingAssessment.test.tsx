import {
  act,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import type { Trip } from "../../../server/trips.ts";
import MockTripsProviders from "../mocks/MockTripsProviders.tsx";
import DrivingAssessment from "./DrivingAssessment.tsx";

const testTrips: Trip[] = [
  {
    id: "trip-1",
    date: "1st July 2020",
    incidents: 2,
    distance: 30,
    confirmed: false,
  },
];

describe("DrivingAssessment", () => {
  test.skip("syncing happens every 10 seconds", async () => {
    render(<DrivingAssessment />, { wrapper: MockTripsProviders(testTrips) });
  });
});
