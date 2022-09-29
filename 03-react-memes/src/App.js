import { useState } from 'react';
import './Styles/app.css';
import html2canvas from "html2canvas";

function App() {

  const [imagen, setImagen] = useState('fire')
  const [linea1, setLinea1] = useState('')
  const [linea2, setLinea2] = useState('')

  const onChangeImagen = (evento) => {
    setImagen(evento.target.value);
  }

  const onChangeLinea1 = (evento) => {
    setLinea1(evento.target.value);
  }

  const onChangeLinea2 = (evento) => {
    setLinea2(evento.target.value);
  }

  const onClickExportar = () => {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">
     
     
      <select onChange={onChangeImagen}>
        <option value="aysi">Casa en llamas</option>
        <option value="babyexito">Exitoso</option>
        <option value="badluck">Mala suerte</option>
        <option value="batmanyrobin">Cachetada</option>
        <option value="bebefurioso">Furioso</option>
        <option value="cryingpeterparker">LLoron</option>
        <option value="fatchinese">Chino gordo</option>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="iamsexy">Sexy</option>
        <option value="jackiechan">jackieChan</option>
        <option value="julioiglesias">Julio Iglesis</option>
        <option value="keanu">keanu</option>
        <option value="matrix">Matrix</option>
        <option value="mrbean">Mr Bean</option>
        <option value="nocreo">No creo</option>
        <option value="nomedigas">No me digas</option>
        <option value="pedreiro">Pedreiro</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="porfavor">Porfavor</option>
        <option value="problema">Problema</option>
        <option value="raptor">Raptor</option>
        <option value="smart">Smart Guy</option>
        <option value="stonerstanley">Stoner Stanley</option>
        <option value="troll">Troll</option>
        <option value="willywonka">WillyWonka</option>
        <option value="yaoming">Yaoming</option>
        <option value="yoda">Yoda</option>
      </select>
      <br />

      <input type="text" onChange={onChangeLinea1} placeholder="Ingrese linea1" maxLength="30" />
      <br />
      <input type="text" onChange={onChangeLinea2} placeholder="Ingrese linea2" maxLength="30" />
      <br />
      <button onClick={onClickExportar}>Exportar</button>

      <div className="meme" id="meme">
        <span className="linea1">{linea1}</span>
        <br />
        <span className="linea2">{linea2}</span>
        <img src={"/img/" + imagen + ".jpg"} />
      </div>

    </div>
  );
}

export default App;
