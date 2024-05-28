import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TripsProvider, { SetTripsProvider } from "../TripsState.jsx";
import DrivingHistory from "./DrivingHistory.jsx";
import useCursor from "../hooks/useCursor.js";

const testTrips = [
  {
    id: "1",
    date: "11th May 2023",
    distance: 10,
    incidents: 0,
  },
];

const TestTripsProviders = ({ children }) => {
  return <>{children}</>;
};

describe("DrivingHistory", () => {
  test.skip("selects trip when clicked", async () => {
    render(<DrivingHistory />, { wrapper: TestTripsProviders });
    const user = userEvent.setup();
    const tripRow = screen.getByRole("button", { name: /Select trip 1/i });
    await user.click(tripRow);
    expect(tripRow).toHaveClass("outline");
  });

  test.todo("updates distance when changed");
});
