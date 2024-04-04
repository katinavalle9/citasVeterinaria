import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPaciente from "./components/ListadoPaciente";
import { useState } from "react";

function App() {

  const [paciente,setPaciente]=useState([])

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario  
        setPaciente={setPaciente}
        />
        <ListadoPaciente />
      </div>
    </div>
  );
}

export default App;
