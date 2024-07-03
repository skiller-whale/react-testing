import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { Trip } from "../../../server/trips";
import TripRow from "./TripRow.tsx";

const testTrip: Trip = {
  id: "trip-1",
  date: "1st July 2020",
  incidents: 2,
  distance: 30,
  confirmed: false,
};

describe("TripRow", () => {
  test.skip("confirm button triggers confirmation", async () => {
    const user = userEvent.setup();
    render(
      <TripRow tripNumber={0} trip={testTrip} confirmTrip={async () => {}} />
    );

    const confirmButton = screen.getByRole("button", {
      name: "Confirm trip trip-1",
    });
    await user.click(confirmButton);
  });
});
