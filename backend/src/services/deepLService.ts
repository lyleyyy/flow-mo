import * as dotenv from "dotenv";
import * as deepl from "deepl-node";
import * as path from "path";
import * as fs from "fs";

dotenv.config();

const authKey = process.env.DEEPL_AUTH_KEY as string;
const translator = new deepl.Translator(authKey);

export async function translateFile(
  fileBuffer: Buffer,
  sourceLang: string,
  targetLang: string,
  fileName: string
) {
  // console.log(fileBuffer, "fileBuffer");
  // console.log(sourceLang, "sourceLang");
  // console.log(targetLang, "targetLang");
  // console.log(fileName, "fileName");
  // console.log(__dirname, "__dirname");

  const outputFileName = fileName.split(".").join("-translatedByFlowMo.");
  const outputFilePath = path.join(
    __dirname,
    "translated-files",
    outputFileName
  );
  // console.log(outputFilePath, "outputFilePath");

  const outputWriteStream = fs.createWriteStream(outputFilePath);
  const status = await translator.translateDocument(
    fileBuffer,
    outputWriteStream,
    sourceLang as deepl.SourceLanguageCode,
    targetLang as deepl.TargetLanguageCode,
    { filename: fileName }
  );

  if (status.status === "done") {
    console.log("Translation completed successfully!");
    await fs.promises.access(outputFilePath);
    console.log("Output file exists and translation is done.");
  } else {
    console.log(`Translation status: ${status.status}`);
  }
}

export async function checkFileStatus() {}

export async function downloadFile() {}
