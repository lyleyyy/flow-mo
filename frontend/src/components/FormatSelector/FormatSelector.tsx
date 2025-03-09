import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FileIcon, defaultStyles, DefaultExtensionType } from "react-file-icon";
import FormatOptions from "./FormatOptions/FormatOptions";
import fileFormats from "../../data/fileFormats";

interface FormatSelectorProps {
  defaultFormat: string;
}

export default function FormatSelector({ defaultFormat }: FormatSelectorProps) {
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
  const [selectedFormat, setSelectedFormat] = useState<string>(defaultFormat);

  const fileFormat = fileFormats.find(
    (fileFormat) => selectedFormat === fileFormat.extension
  )?.name;

  return (
    <div
      className={`bg-zinc-100 w-[200px] h-[50px] rounded-sm flex items-center justify-between px-4 relative hover:bg-zinc-200 ${
        isOptionsOpen && "bg-zinc-200"
      }`}
      onClick={() => setIsOptionsOpen((isOpen) => !isOpen)}
    >
      <input name="formats" value={selectedFormat} hidden readOnly />
      <div className="flex items-center text-xl gap-2">
        <span className="w-[30px] h-[30px]">
          <FileIcon
            extension={selectedFormat}
            {...defaultStyles[selectedFormat as DefaultExtensionType]}
          />
        </span>
        <span className="flex">{fileFormat}</span>
      </div>
      <IoIosArrowDown className="text-zinc-500" />

      {isOptionsOpen && (
        <FormatOptions
          selectedFormat={selectedFormat}
          setSelectedFormat={setSelectedFormat}
        />
      )}
    </div>
  );
}
