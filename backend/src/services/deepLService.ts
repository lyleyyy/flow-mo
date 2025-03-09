import * as deepl from "deepl-node";
import * as fs from "fs";

const authKey = process.env.DEEPL_AUTH_KEY as string;
const translator = new deepl.Translator(authKey);

export async function translateFile() {
  // export async function translateFile(file, sourceLang, targetLang) {
  //   const result = await translator.translateText("Hello, world!", null, "de");
  //   const result = await translator.translateDocument(
  //     file,
  //     outp,
  //     sourceLang,
  //     targetLang
  //   );
  //   console.log(result.text);
}

export async function checkFileStatus() {}

export async function downloadFile() {}
