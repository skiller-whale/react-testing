import type { Trip } from "../../server/trips.ts";

export const fetchTrips = async (): Promise<Trip[]> => {
  const response = await fetch("http://localhost:3500/api/trips");
  const { trips } = await response.json();
  return trips;
};

export const confirmTrip = async (id: string): Promise<Trip> => {
  const response = await fetch(
    `http://localhost:3500/api/trips/${id}/confirm`,
    { method: "POST" }
  );
  if (response.status === 404) {
    throw new Error(`Trip id '${id}' not found.`);
  }
  const { trip } = await response.json();
  return trip;
};
