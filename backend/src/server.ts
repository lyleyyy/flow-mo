import express, { Request, Response } from "express";

const app = express();
const port: number = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Expresssssss!!!!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
