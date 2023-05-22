import { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';

function Palabras(props) {
  const [contador, setContador] = useState(1);

  useEffect(() => {
    let cont = 1;
    for(let i=0; i<props.texto.length;i++) {
      if(props.texto[i] === ' ') {
        if(props.texto[i+1] !== ' '  && i+1 !== props.texto.length) {
          cont++;
        }
      }
    }
    setContador(cont)
  }, [props.texto]);

  return (
    <Card>
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
          <i className="pi pi-align-left"></i>
        </span>
        <InputText
          type="text"
          onChange={props.cambiar}
          maxLength={props.maximo}
          value={props.texto}
        />
        <span className="p-inputgroup-addon">{props.numero}/{props.maximo}</span>
      </div>
      <div className="p-mt-2">
        <p className="p-m-0">Cantidad de palabras:</p>
        <h2 className="p-m-0">{contador}</h2>
      </div>
    </Card>
  );
}

export default Palabras;
