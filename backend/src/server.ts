import express, { Request, Response } from "express";
import cors from "cors";
import { translateFile } from "./services/deepLService";
import multer from "multer";
import * as fs from "fs";
import { covertTranslatedFile } from "./services/cloudConvertService";
import axios from "axios";

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
  async (req: Request, res: Response) => {
    // console.log(req.body);
    // console.log(req.file, "!!!!!!");

    try {
      if (!req.file) throw new Error("No File Uploaded");

      const fileBuffer = req.file.buffer;
      const sourceLang = req.body.languages[0];
      const targetLang = req.body.languages[1];
      const fileName = req.file.originalname;
      // const translatedFileBuffer = await translateFile(
      //   fileBuffer,
      //   sourceLang,
      //   targetLang,
      //   fileName
      // );

      // console.log(translatedFileBuffer, "translatedFileBuffer!!!!");

      // const filePath =
      //   "/Users/lyle/Development/flow-mo/backend/src/services/translated-files/Doc1-translatedByFlowMo.docx";

      // if (!fs.existsSync(filePath)) {
      //   console.error("File does not exist:", filePath);
      // } else {
      //   console.log("?????????");
      //   try {
      //     const translatedFileBuffer = fs.readFileSync(filePath);
      //     console.log("File successfully read:", translatedFileBuffer);
      //     console.log(
      //       "File content as Base64:",
      //       translatedFileBuffer.toString("base64")
      //     );
      //   } catch (error) {
      //     console.error("Error reading the file:", error);
      //   }
      // }

      const translatedFileBuffer = fs.readFileSync(
        "/Users/lyle/Development/flow-mo/backend/src/services/translated-files/Doc1-translatedByFlowMo.docx"
      );

      await covertTranslatedFile(
        translatedFileBuffer,
        "Doc1-translatedByFlowMo.docx"
      );

      res.json({ messag: "translate and covert request success" });
    } catch (error) {
      console.error("Translate and Convert Error" + error);

      if (axios.isAxiosError(error)) {
        console.error("Status:", error.response?.status);
        console.error("Data:", error.response?.data);
        console.error("Headers:", error.response?.headers);
      }
    }
  }
);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
