import * as deepl from "deepl-node";
import * as fs from "fs";

const authKey = "df3012ad-49af-4b68-be45-5a7cf6b743c4:fx";
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
