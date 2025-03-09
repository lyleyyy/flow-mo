import LanguageSelector from "../LanguageSelector/LanguageSelector";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
import { LuArrowLeftRight } from "react-icons/lu";
import SelectorContainer from "../SelectorContainer/SelectorContainer";
import FormatSelector from "../FormatSelector/FormatSelector";
import { FormEvent } from "react";

interface FormSubmitData {
  file: File;
  languages: string[];
  formats: string[];
}

export default function MainForm() {
  async function formSubmitHandler(e: FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    // console.log(formData.get("file"));
    // console.log(formData.getAll("languages"));
    // console.log(formData.getAll("formats"));

    // const jsonData = Object.fromEntries(formData.entries());
    const formSubmitData: FormSubmitData = {
      file: formData.get("file") as File,
      languages: formData.getAll("languages") as string[],
      formats: formData.getAll("formats") as string[],
    };

    // console.log(formSubmitData);

    try {
      const response = await fetch("http://localhost:3000/api/flowmo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formSubmitData),
      });

      if (!response.ok)
        throw new Error(`HTTP error! Status Code: ${response.status}`);

      const result = await response.json();
      console.log(result, "hmm");
    } catch (error) {
      console.error(`Request failed: ${error}`);
    }
  }

  return (
    <form
      className="flex flex-col items-center gap-12 bg-zinc-900 p-8"
      onSubmit={(e) => formSubmitHandler(e)}
    >
      <div className="space-y-4">
        <SelectorContainer>
          <LanguageSelector defaultLanguageCode="en" />
          <LuArrowLeftRight className="text-3xl text-zinc-400" />
          <LanguageSelector defaultLanguageCode="fr" />
        </SelectorContainer>

        <SelectorContainer>
          <FormatSelector defaultFormat="docx" />
          <LuArrowLeftRight className="text-3xl text-zinc-400" />
          <FormatSelector defaultFormat="pdf" />
        </SelectorContainer>
      </div>

      <DragAndDrop />

      <button
        type="submit"
        className="bg-blue-600 rounded-sm w-[200px] text-white h-[40px] font-bold hover:bg-blue-500"
        // onClick={(e) => e.preventDefault()}
      >
        Upload and Process
      </button>
    </form>
  );
}
