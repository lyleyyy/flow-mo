import { CircleFlagLanguage } from "react-circle-flags";
import languages from "../../../data/languages";
import { FcCheckmark } from "react-icons/fc";

interface LanguageOptionsProps {
  selectedLanguage: string;
  setSelectedLanguage: (languageCode: string) => void;
}

export default function LanguageOptions({
  selectedLanguage,
  setSelectedLanguage,
}: LanguageOptionsProps) {
  return (
    <div className="absolute top-[50px] left-0 flex flex-col text-xl drop-shadow-md w-[200px] rounded-sm mt-1 bg-white z-50">
      {languages.map((language) => (
        <div
          key={language.languageCode}
          className="flex w-full h-[50px] items-center justify-between px-4 hover:bg-zinc-200 rounded-sm"
          onClick={() => setSelectedLanguage(language.languageCode)}
        >
          <div className="flex gap-2">
            <CircleFlagLanguage
              languageCode={language.languageCode}
              className="w-[30px] h-[30px]"
            />
            <span>{language.name}</span>
          </div>
          {selectedLanguage === language.languageCode && <FcCheckmark />}
        </div>
      ))}
    </div>
  );
}
