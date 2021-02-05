import utils from '../src/util/util'
import path from 'path';
import supertest from 'supertest'
import app from '../src/index'
const request = supertest(app);
const result = path.resolve(__dirname+"/../images/thumbnail/encenadaport200x200.jpg")

test('Url is for file location is ', () => {
  return expect(utils.filterImageFromURL("encenadaport", 200, 200)).resolves.toBe(result);
});

it("gets the / endpoint to verify for", async done => {
  const response = await request.get("/");
  expect(response.status).toBe(200);
  done();
});