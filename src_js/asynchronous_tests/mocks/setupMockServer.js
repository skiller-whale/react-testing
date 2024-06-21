import mockServer from "./mockServer.js";

const setupMockServer = (testTrips) => {
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
