import { Router } from "express";

export type Trip = {
  id: string;
  date: string;
  incidents: number;
  distance: number;
  confirmed?: boolean;
};

const api = Router();

api.get("/trips", (_, res) => {
  const trips = generateRandomTrips();
  setTimeout(() => {
    res.json({ trips });
  }, 300);
});

export default api;

const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRandomTrips  = (): Trip[] => {
  const trips: Trip[] = [
    {
      id: "trip-1",
      date: "1st July 2020",
      incidents: getRandomInt(1, 2),
      distance: 30,
      confirmed: true,
    },
    {
      id: "trip-2",
      date: "3rd July 2020",
      incidents: getRandomInt(1, 6),
      distance: 20,
      confirmed: true,
    },
    {
      id: "trip-3",
      date: "5th July 2020",
      incidents: 0,
      distance: 8,
      confirmed: true,
    },
    {
      id: "trip-4",
      date: "8th July 2020",
      incidents: getRandomInt(1, 12),
      distance: 80,
      confirmed: true,
    },
    {
      id: "trip-5",
      date: "12th July 2020",
      // score of 90
      incidents: 10,
      distance: 100,
      confirmed: true,
    },
  ];

  for (let i = 0; i < getRandomInt(2, 5); i++) {
    trips.push({
      id: `trip-${trips.length + 1}`,
      date: `${13 + i}th July 2020`,
      incidents: getRandomInt(10, 40),
      distance: getRandomInt(40, 60),
    });
  }

  return trips;
};
