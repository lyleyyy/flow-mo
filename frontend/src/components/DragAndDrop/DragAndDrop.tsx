import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaPlus } from "react-icons/fa";

export default function DragAndDrop() {
  const [currentFile, setCurrentFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // console.log(acceptedFiles);
    const submittedFile = acceptedFiles[0];
    setCurrentFile(submittedFile);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
      "application/pdf": [".pdf"],
      "text/plain": [".txt"],
      "application/rtf": [".rtf"],
      "text/html": [".html"],
    },
  });

  return (
    <div
      className="w-4/5 h-[400px] bg-white rounded-sm flex flex-col justify-center items-center p-8 text-center gap-4 hover:bg-zinc-100"
      {...getRootProps()}
    >
      <input name="file" {...getInputProps()} />
      <FaPlus className="text-6xl text-zinc-300" />
      {currentFile && <p>{currentFile.name}</p>}
      {!currentFile && (
        <p>Click to select the file, or Drag and Drop the file here</p>
      )}
    </div>
  );
}
