import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//importando paginas
import { Index } from "./pages/index";
import { listarPacientes } from "./pages/listarPacientes/listarPacientes";


function App() {
  return (
    <Router>
      <Routes>
        {/* renderizando paginas */}
        <Route path='/' exact element={<Index />} />
        <Route path="/listarPacientes" exact element={<listarPacientes/>} />
      </Routes>
    </Router>
  );
}

export default App;
