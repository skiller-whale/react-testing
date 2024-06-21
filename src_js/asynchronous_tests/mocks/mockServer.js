import { delay, http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

let initialTrips = [];
let trips = [];

const setTrips = (testTrips) => {
  initialTrips = [...testTrips];
  trips = [...testTrips];
};

const resetTrips = () => {
  trips = [...initialTrips];
};

const networkDelay = 200;

const handlers = [
  http.get("http://localhost:3500/api/trips", async () => {
    await delay(networkDelay);
    return HttpResponse.json({ trips });
  }),
  http.post("http://localhost:3500/api/trips/reset", async () => {
    await delay(networkDelay);
    resetTrips();
    return HttpResponse.json({ trips });
  }),
  http.get("http://localhost:3500/api/trips/:id", async ({ params }) => {
    await delay(networkDelay);
    const { id } = params;
    const trip = trips.find((trip) => trip.id === id);
    if (trip) {
      return HttpResponse.json({ trip });
    } else {
      return HttpResponse.json({ error: "Trip not found" }, { status: 404 });
    }
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

const server = setupServer(...handlers);

export default { server, setTrips, resetTrips };
