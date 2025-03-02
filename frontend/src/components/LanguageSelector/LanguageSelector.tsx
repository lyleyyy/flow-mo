import { useState } from "react";
import languages from "../../data/languages";
import LanguageOptions from "./LanguageOptions/LanguageOptions";
import { CircleFlagLanguage } from "react-circle-flags";
import { IoIosArrowDown } from "react-icons/io";

export default function LanguageSelector() {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const languageName = languages.find(
    (language) => selectedLanguage === language.languageCode
  )?.name;

  return (
    <button
      type="button"
      className="bg-zinc-100 w-[200px] h-[50px] rounded-sm flex items-center justify-between px-4 relative"
      onClick={() => setIsOptionsOpen((isOpen) => !isOpen)}
    >
      <div className="flex items-center text-xl gap-2">
        <CircleFlagLanguage
          languageCode={selectedLanguage}
          className="w-[30px] h-[30px]"
        />
        <span className="flex">{languageName}</span>
      </div>
      <IoIosArrowDown className="text-zinc-500" />

      {isOptionsOpen && (
        <LanguageOptions
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />
      )}
    </button>
  );
}
