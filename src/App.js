import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Fundo from "./components/telaFundo";
import Tutorial from "./pages/Tutorial";
import EscolherTime from "./pages/Times";
import Configurar from "./pages/Configurar";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Fundo />} />

        <Route path="/tutorial" element={<Tutorial />} />

        <Route path="/escolher-time" element={<EscolherTime />} />

        <Route path="/configurar" element={<Configurar />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;