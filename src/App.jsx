import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Tours from './pages/Tours';
import Airport from "./pages/Airport";
import CarHire from "./pages/CarHire";
import Chauffeur from "./pages/Chauffeur";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/airport" element={<Airport />} />
      <Route path="/carhire" element={<CarHire />} />
      <Route path="/chauffeur" element={<Chauffeur />} />
    </Routes>
  );
}

export default App;
