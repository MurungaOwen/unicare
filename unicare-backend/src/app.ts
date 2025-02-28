import express from "express";
import { Request, Response } from "express";
import logger from "morgan"; // for displaying http logs
import appRouter from "./routes/v1";
import cors from "cors";
import { errorHandler } from "./middleware/error";
import receptionistRouter from "./routes/v1/receptionistRoutes";
import appointmentRouter from "./routes/v1/appointmentRoutes";
import pharmacistRouter from "./routes/v1/pharmacistRoutes";
// Create Express server
const app = express();

app.use(cors());

app.use(logger("dev"));
app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * Primary app routes.
 */
app.use("/api/v1", appRouter);
app.use("/api/v1/receptionist", receptionistRouter);
app.use("/api/v1/appointments", appointmentRouter);
app.use("/api/v1/pharmacist", pharmacistRouter);

/**
 * route to test server
 */

app.get("/api/v1", (req: Request, res: Response) => {
  res.status(200).json({ msg: "server is up.." });
});

app.use(errorHandler);
export default app;
