import * as express from "express";
import * as cors from "cors";
import * as path from "path";
import { pingController } from "./controllers/ping";
import { careRecipientsController } from "./controllers/careRecipients";

const app = express();

app.use(cors());
app.use(pingController);
app.use(careRecipientsController);
app.use(express.static(path.join(__dirname, "../../front-end/build")));

export default app;
