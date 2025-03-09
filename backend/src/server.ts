import express, { Request, Response } from "express";
import cors from "cors";
import { translateFile } from "./services/deeplService";

const app = express();
app.use(cors());
app.use(express.json());
const port: number = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Expresssssss!!!!");
});

app.post("/api/flowmo", (req, res) => {
  translateFile();
  console.log(req.body);
  res.json({ messag: "post req success", data: req.body });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
