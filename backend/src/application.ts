import * as express from "express";
import { pingController } from "./controllers/ping";
import { careRecipientsController } from "./controllers/careRecipients";

const app = express();

app.use(pingController);
app.use(careRecipientsController);

export default app;
