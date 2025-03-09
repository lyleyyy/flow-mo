import { FcCheckmark } from "react-icons/fc";
import { defaultStyles, FileIcon, DefaultExtensionType } from "react-file-icon";
import fileFormats from "../../../data/fileFormats";

interface FormatOptionsProps {
  selectedFormat: string;
  setSelectedFormat: (extension: string) => void;
}

export default function FormatOptions({
  selectedFormat,
  setSelectedFormat,
}: FormatOptionsProps) {
  return (
    <div className="absolute top-[50px] left-0 flex flex-col text-xl drop-shadow-md w-[200px] rounded-sm mt-1 bg-white z-50">
      {fileFormats.map((fileFormat) => (
        <div
          key={fileFormat.extension}
          className="flex w-full h-[50px] items-center justify-between px-4 hover:bg-zinc-200 rounded-sm"
          onClick={() => setSelectedFormat(fileFormat.extension)}
        >
          <div className="flex gap-2">
            <span className="w-[30px] h-[30px]">
              <FileIcon
                extension={selectedFormat}
                {...defaultStyles[fileFormat.extension as DefaultExtensionType]}
              />
            </span>
            <span>{fileFormat.name}</span>
          </div>
          {selectedFormat === fileFormat.extension && <FcCheckmark />}
        </div>
      ))}
    </div>
  );
}
