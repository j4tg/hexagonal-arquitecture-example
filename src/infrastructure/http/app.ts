import express from "express";
import bodyParser from "body-parser";
import { CreateBooking } from "../../application/CreateBooking";
import { DependencyContainer } from "tsyringe";

export function createApp(container: DependencyContainer) {
  const app = express();
  app.use(bodyParser.json());

  app.get("/", (_, res) => {
    res.send("Arquitecture Hexagonal");
  });

  app.post("/booking", async (req, res) => {
    await container.resolve(CreateBooking).execute({
      date: req.body.date,
      email: req.body.email,
    });
    res.status(204).send();
  });

  return app;
}
