import express, { Request, Response } from "express";
import { ProductRoutes } from "./modules/products/product.route";
const app = express();

// parsers
app.use(express.json());

// routes
app.use("/api/products", ProductRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
