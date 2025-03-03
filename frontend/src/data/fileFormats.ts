type FileFormat = {
  extension: string;
  name: string;
};

const fileFormats: FileFormat[] = [
  { extension: "docx", name: "Word" },
  { extension: "pdf", name: "PDF" },
  { extension: "txt", name: "Text" },
  { extension: "rtf", name: "RTF" },
  { extension: "html", name: "HTML" },
];

export default fileFormats;
