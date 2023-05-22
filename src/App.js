import { useState, useEffect } from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css";
import Palabras from './Palabras';

function App() {
  const maximo = 100;
  const [texto, setTexto] = useState("")
  const [numero, setNumero] = useState(0)

  useEffect(() => {
    setNumero(texto.length);
    if(texto.length===maximo)
      alert("Llegaste al límite de caracteres permitidos");
  }, [texto]);

  function cambiar(e) {
    if(e.target.value.length<=maximo)
      setTexto(e.target.value);
  }

  return (
    <div className="p-fluid">
      <h1 className="titulo">Contador de palabras</h1>
      <Palabras cambiar={cambiar} texto={texto} numero={numero} maximo={maximo}></Palabras>
    </div>
  );
}

export default App;
