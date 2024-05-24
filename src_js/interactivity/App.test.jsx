import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App.tsx";

const testTrips = [
  {
    id: "1",
    date: "11th May 2023",
    distance: 10,
    incidents: 0,
  }
];

describe("App", () => {
  test.skip("renders 'no trips available' for empty trips", () => {
    render(<App trips={[]} />);
    const notification = screen.getByText(/No trips available/i);
    expect(notification).toBeInTheDocument();
  });

  test("renders 'Assessment' tab by default", () => {
    render(<App trips={testTrips} />);
    const heading = screen.getByRole("heading", { name: /Overall Driving Assessment/i });
    expect(heading).toBeInTheDocument();
  });

  test.todo("renders 'Trips' tab when link is clicked");
});
