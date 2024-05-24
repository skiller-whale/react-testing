import { render } from "@testing-library/react";
import type { Trip } from "../../../server/api.ts";
import TripRow from "./TripRow.tsx";

describe("TripRow component", () => {
  const testTrip: Trip = {
    id: "trip-1",
    confirmed: true,
    date: "1st July 2020",
    distance: 30,
    incidents: 2,
  };

  test("displays trip information correctly", () => {
    const result = render(<TripRow tripNumber={1} trip={testTrip} />, {
      container: document
        .createElement("table")
        .appendChild(document.createElement("tbody")),
    });
    expect(result.asFragment()).toMatchSnapshot();
  });
});
