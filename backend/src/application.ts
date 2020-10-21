import * as express from "express";
import * as cors from "cors";
import { pingController } from "./controllers/ping";
import { careRecipientsController } from "./controllers/careRecipients";

const app = express();

app.use(cors());
app.use(pingController);
app.use(careRecipientsController);

export default app;
