import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { PropsWithChildren } from "react";
import type { Trip } from "../../../server/trips.ts";
import TripsProvider, { SetTripsProvider } from "../TripsState.tsx";
import useCursor from "../hooks/useCursor.ts";
import DrivingHistory from "./DrivingHistory.tsx";

const testTrips: Trip[] = [
  {
    id: "1",
    date: "11th May 2023",
    distance: 10,
    incidents: 0,
    confirmed: true,
  },
];

const TestTripsProviders = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

describe("DrivingHistory", () => {
  test.skip("selects trip when clicked", async () => {
    const user = userEvent.setup();
    render(<DrivingHistory />, { wrapper: TestTripsProviders });
    const tripRow = screen.getByRole("button", { name: /Select trip 1/i });
    await user.click(tripRow);
    expect(tripRow).toHaveClass("outline");
  });

  test.todo("updates distance when changed");
});
