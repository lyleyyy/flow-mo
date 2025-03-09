import { useState } from "react";
import languages from "../../data/languages";
import LanguageOptions from "./LanguageOptions/LanguageOptions";
import { CircleFlagLanguage } from "react-circle-flags";
import { IoIosArrowDown } from "react-icons/io";

interface LanguageSelectorProps {
  defaultLanguageCode: string;
}

export default function LanguageSelector({
  defaultLanguageCode,
}: LanguageSelectorProps) {
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>(defaultLanguageCode);

  const languageName = languages.find(
    (language) => selectedLanguage === language.languageCode
  )?.name;

  return (
    <div
      className={`bg-zinc-100 w-[200px] h-[50px] rounded-sm flex items-center justify-between px-4 relative hover:bg-zinc-200 ${
        isOptionsOpen && "bg-zinc-200"
      }`}
      onClick={() => setIsOptionsOpen((isOpen) => !isOpen)}
    >
      <input name="languages" value={selectedLanguage} hidden readOnly />
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
    </div>
  );
}
