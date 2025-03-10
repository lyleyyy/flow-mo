import * as dotenv from "dotenv";
import * as deepl from "deepl-node";
import * as multer from "multer";
import fs from "fs";

dotenv.config();

const authKey = process.env.DEEPL_AUTH_KEY as string;
const translator = new deepl.Translator(authKey);

export async function translateFile(
  fileBuffer: Buffer,
  sourceLang: string,
  targetLang: string
) {
  console.log(fileBuffer, "wayayaay!!");
  console.log(sourceLang);
  console.log(targetLang);

  const outputFilePath = "";
  const outputWriteStream = fs.createWriteStream(outputFilePath);
  // export async function translateFile(file, sourceLang, targetLang) {
  //   const result = await translator.translateText("Hello, world!", null, "de");
  // const result = await translator.translateDocument(
  //   fileBuffer,
  //   outputWriteStream,
  //   sourceLang,
  //   targetLang
  // );
  //   console.log(result.text);
}

export async function checkFileStatus() {}

export async function downloadFile() {}
