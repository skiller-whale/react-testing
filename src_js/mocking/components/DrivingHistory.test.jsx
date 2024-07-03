import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MockTripsProviders from "../mocks/MockTripsProviders.jsx";
import DrivingHistory from "./DrivingHistory.jsx";

const testTrips = [
  {
    id: "trip-1",
    date: "1st July 2020",
    incidents: 2,
    distance: 30,
    confirmed: false,
  },
];

describe("DrivingHistory", () => {
  test.skip("confirm button works", async () => {
    const user = userEvent.setup();
    render(<DrivingHistory />, { wrapper: MockTripsProviders(testTrips) });

    const confirmTripButton = screen.getByRole("button", {
      name: "Confirm trip trip-1",
    });
    await user.click(confirmTripButton);
    expect(confirmTripButton).toHaveTextContent("Confirming...");
    await waitFor(() => {
      expect(confirmTripButton).toHaveTextContent("Confirmed");
    });
  });
});
