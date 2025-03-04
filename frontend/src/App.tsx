import AppLayout from "./components/AppLayout/AppLayout";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainForm from "./components/MainForm/MainForm";

function App() {
  return (
    <AppLayout>
      <Header />
      <MainForm />
      <Footer />
    </AppLayout>
  );
}

export default App;
