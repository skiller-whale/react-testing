import { Router } from "express";
import { generateRandomTrips } from "./trips.ts";

const trips = generateRandomTrips();

const api = Router();

api.get("/trips", (_, res) => {
  setTimeout(() => {
    res.json({ trips });
  }, 300);
});

api.post("/trips/reset", (_, res) => {
  while (trips.length) trips.pop();
  trips.push(...generateRandomTrips());
  setTimeout(() => {
    res.json({ trips });
  }, 300);
});

api.get("/trips/:id", (req, res) => {
  const { id } = req.params;
  const trip = trips.find((trip) => trip.id === id);
  if (trip) {
    setTimeout(() => {
      res.json({ trip })
    }, 300);
  } else {
    res.status(404).send();
  }
});

api.post("/trips/:id/confirm", (req, res) => {
  const { id } = req.params;
  const trip = trips.find((trip) => trip.id === id);
  console.log(id)
  console.log(trip)
  if (trip) {
    trip.confirmed = true;
    setTimeout(() => {
      res.json({ trip })
    }, 300);
  } else {
    res.status(404).send();
  }
});

export default api;

