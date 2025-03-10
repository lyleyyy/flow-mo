import express, { Request, Response } from "express";
import cors from "cors";
import { translateFile } from "./services/deepLService";
import multer from "multer";

const app = express();
app.use(cors());
app.use(express.json());
const port: number = 3000;

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Expresssssss!!!!");
});

app.post(
  "/api/translate&convert",
  upload.single("file"),
  (req: Request, res: Response) => {
    console.log(req.body);
    // console.log(req.file);

    try {
      if (!req.file) throw new Error("No File Uploaded");

      const fileBuffer = req.file.buffer;
      const sourceLang = req.body.languages[0];
      const targetLang = req.body.languages[1];
      translateFile(fileBuffer, sourceLang, targetLang);
      res.json({ messag: "post req success", data: req.body });
    } catch (error) {
      console.error("Translate and Convert Error" + error);
    }
  }
);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
