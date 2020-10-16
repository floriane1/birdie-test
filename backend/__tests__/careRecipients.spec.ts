import app from "../src/application";
import * as request from "supertest";
import { Event } from "../src/types";

describe("Router", () => {
  it("returns a 404 error for invalid route", async () => {
    await request(app)
      .get("/dummy-route")
      .expect(404);
  });
});

describe("GET /care-recipients", () => {
  it("returns an array of care recipients IDs", async () => {
    await request(app)
      .get("/care-recipients")
      .expect(200)
      .expect("Content-Type", /json/)
      .expect((res) => {
        const careRecipientsIds: string[] = res.body;
        expect(Array.isArray(careRecipientsIds)).toBeTruthy();
        expect(careRecipientsIds.length).toBeGreaterThan(0);
      });
  });
});

const CARE_RECIPIENT_ID = "e3e2bff8-d318-4760-beea-841a75f00227";

describe("GET /care-recipients/:id/events", () => {
  it("returns an array of events", async () => {
    await request(app)
      .get(`/care-recipients/${CARE_RECIPIENT_ID}/events`)
      .expect(200)
      .expect("Content-Type", /json/)
      .expect((res) => {
        const events: Event[] = res.body;
        expect(Array.isArray(events)).toBeTruthy();
        expect(events.length).toBeGreaterThan(0);

        const keys = ["id", "event_type", "care_recipient_id", "timestamp"];
        keys.forEach((key) => {
          expect(events[0]).toHaveProperty(key);
        });
      });
  });
  it("returns an empty array of events for invalid care recipient id", async () => {
    await request(app)
      .get(`/care-recipients/dummy-id/events`)
      .expect(200)
      .expect("Content-Type", /json/)
      .expect((res) => {
        const events: Event[] = res.body;
        expect(Array.isArray(events)).toBeTruthy();
        expect(events.length).toBe(0);
      });
  });
});
