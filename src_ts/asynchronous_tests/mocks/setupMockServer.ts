import type { Trip } from "../../../server/trips.ts";
import mockServer from "./mockServer.ts";

const setupMockServer = (testTrips: Trip[]) => {
  beforeAll(() => {
    mockServer.server.listen();
  });

  beforeEach(() => {
    mockServer.setTrips(testTrips);
  });

  afterEach(() => {
    mockServer.server.resetHandlers();
  });

  afterAll(() => {
    mockServer.server.close();
  });
};

export default setupMockServer;
