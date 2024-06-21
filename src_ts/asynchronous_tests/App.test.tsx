import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { Trip } from "../../server/trips.ts";
import App from "./App.tsx";
import setupMockServer from "./mocks/setupMockServer.ts";

const testTrips: Trip[] = [
  {
    id: "trip-1",
    date: "1st July 2020",
    incidents: 2,
    distance: 30,
    confirmed: false,
  },
];

setupMockServer(testTrips);

describe("App", () => {
  test.todo("renders 'loading' placeholder, then driving assessment");

  test.skip("renders driving history when trips tab clicked", async () => {
    const user = userEvent.setup();
    render(<App />);

    const tripsTab = screen.getByRole("link", { name: "Trips" });
    user.click(tripsTab);

    const heading = await screen.findByRole("heading", { name: "Your Trips" });
    expect(heading).toBeInTheDocument();
  });
});
