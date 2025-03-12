import dotenv from "dotenv";
import CloudConvert from "cloudconvert";

dotenv.config();
const cloudConvert = new CloudConvert(
  process.env.CLOUD_CONVERT_API_KEY as string
);

export async function covertDoc() {
  let job = await cloudConvert.jobs.create({
    tasks: {
      "import-my-file": {
        operation: "import/url",
        url: "https://my-url",
      },
      "convert-my-file": {
        operation: "convert",
        input: "import-my-file",
        output_format: "pdf",
        some_other_option: "value",
      },
      "export-my-file": {
        operation: "export/url",
        input: "convert-my-file",
      },
    },
  });
}
