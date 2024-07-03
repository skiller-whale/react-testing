import {
  act,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import MockTripsProviders from "../mocks/MockTripsProviders.jsx";
import DrivingAssessment from "./DrivingAssessment.jsx";

const testTrips = [
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
