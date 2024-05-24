import type { PropsWithChildren } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { Trip } from "../../../server/api.ts";
import TripsProvider, { SetTripsProvider } from "../TripsState.tsx";
import DrivingHistory from "./DrivingHistory.tsx";
import useCursor from "../hooks/useCursor.ts";

const testTrips: Trip[] = [
  {
    id: "1",
    date: "11th May 2023",
    distance: 10,
    incidents: 0,
  },
];

const TestTripsProviders = ({ children }: PropsWithChildren) => {
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
