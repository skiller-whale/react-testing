import { delay, http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import type { Trip } from "../../../server/trips.ts";

const networkDelay = 200;

let trips: Trip[] = [];

export const setTrips = (testTrips: Trip[]) => {
  trips = [...testTrips];
};

const handlers = [
  http.get("http://localhost:3500/api/trips", async () => {
    await delay(networkDelay);
    return HttpResponse.json({ trips });
  }),
  http.post(
    "http://localhost:3500/api/trips/:id/confirm",
    async ({ params }) => {
      await delay(networkDelay);
      const { id } = params;
      if (trips.some((trip) => trip.id === id)) {
        trips = trips.map((trip) =>
          trip.id === id ? { ...trip, confirmed: true } : trip
        );
        return HttpResponse.json({
          trip: trips.find((trip) => trip.id === id),
        });
      } else {
        return HttpResponse.json({ error: "Trip not found" }, { status: 404 });
      }
    }
  ),
];

export const server = setupServer(...handlers);
