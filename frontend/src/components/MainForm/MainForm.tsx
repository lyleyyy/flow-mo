import LanguageSelector from "../LanguageSelector/LanguageSelector";
import DragAndDrop from "../DragAndDrop/DragAndDrop";

export default function MainForm() {
  return (
    <form className="">
      <LanguageSelector />
      <DragAndDrop />
      <button>Button</button>
    </form>
  );
}
