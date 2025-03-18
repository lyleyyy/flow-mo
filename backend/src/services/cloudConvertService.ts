import dotenv from "dotenv";
import CloudConvert from "cloudconvert";
import * as fs from "fs";
import * as https from "https";

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
        operation: "import/base64",
        file: translatedFileBuffer.toString("base64"),
        filename: fileName,
      },
      "task-convert": {
        operation: "convert",
        input: "import-file",
        input_format: "docx",
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

  console.log(translatedFileBuffer.toString("base64"));
  // console.log(job, "jobbbbb");
  job = await cloudconvert.jobs.wait(job.id);
  console.log(job, "jobbbbb copy awiat");

  console.log(cloudconvert.jobs, "cloudconvert.jobs");
  const file = cloudconvert.jobs.getExportUrls(job)[0];
  console.log(file, "what the h????");

  const writeStream = fs.createWriteStream(
    "/Users/lyle/Downloads" + file.filename
  );

  https.get(file.url as string, function (response) {
    response.pipe(writeStream);
  });

  await new Promise((resolve, reject) => {
    writeStream.on("finish", () => resolve(undefined));
    writeStream.on("error", reject);
  });
}
