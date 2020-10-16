import * as express from "express";
import dbPool from "../db";
import { Event } from "../types";

export const careRecipientsController = express.Router();

careRecipientsController.get("/care-recipients", (_, res) => {
  dbPool.query(
    "SELECT DISTINCT care_recipient_id FROM events",
    (error, results) => {
      if (error) return res.status(500).json(error);
      const careRecipientsIds: string[] = results.map(
        (r: { care_recipient_id: string }) => r.care_recipient_id
      );
      return res.status(200).json(careRecipientsIds);
    }
  );
});

careRecipientsController.get("/care-recipients/:id/events", (req, res) => {
  dbPool.query(
    `SELECT payload FROM events WHERE care_recipient_id="${req.params.id}" ORDER BY timestamp`,
    (error, results) => {
      if (error) return res.status(500).json(error);
      const events: Event[] = results.map((r: { payload: any }) =>
        JSON.parse(r.payload)
      );
      return res.status(200).json(events);
    }
  );
});
