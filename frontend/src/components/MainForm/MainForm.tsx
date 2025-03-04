import LanguageSelector from "../LanguageSelector/LanguageSelector";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
import { LuArrowLeftRight } from "react-icons/lu";
import SelectorContainer from "../SelectorContainer/SelectorContainer";
import FormatSelector from "../FormatSelector/FormatSelector";

export default function MainForm() {
  return (
    <form className="flex flex-col items-center gap-12 bg-zinc-900 p-8">
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
        onClick={(e) => e.preventDefault()}
      >
        Upload and Process
      </button>
    </form>
  );
}
