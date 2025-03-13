import dotenv from "dotenv";
import CloudConvert from "cloudconvert";
import * as fs from "fs";
import * as http from "http";

dotenv.config();
const cloudconvert = new CloudConvert(
  process.env.CLOUD_CONVERT_API_KEY as string
);

export async function covertTranslatedFile(
  translatedFileBuffer: Buffer,
  fileName: string
) {
  // console.log(translatedFileBuffer, "translatedFileBuffer???!!");
  // console.log(
  //   translatedFileBuffer.toString("base64").slice(0, 10),
  //   "waya??????"
  // );

  let job = await cloudconvert.jobs.create({
    tasks: {
      "import-file": {
        operation: "import/raw",
        file: translatedFileBuffer.toString("base64"),
        filename: fileName,
      },
      "task-convert": {
        operation: "convert",
        input: "import-file",
        output_format: "pdf",
      },
      "export-file": {
        operation: "export/url",
        input: "task-convert",
        inline: false,
        archive_multiple_files: false,
      },
    },
  });

  console.log(job, "jobbbbb");
  const file = cloudconvert.jobs.getExportUrls(job)[0];
  console.log(file, "what the h????");

  const writeStream = fs.createWriteStream("./out/" + file.filename);

  http.get(file.url as string, function (response) {
    response.pipe(writeStream);
  });

  await new Promise((resolve, reject) => {
    writeStream.on("finish", () => resolve(undefined));
    writeStream.on("error", reject);
  });
}
