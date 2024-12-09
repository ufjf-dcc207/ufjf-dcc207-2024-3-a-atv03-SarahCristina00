import Animal from "./Animal";
import Exibicao from "./Exibicao";
import "./App.css";
import { ReactNode } from "react";

type AnimaisTuplaType=[string,string,number,boolean];
const ANIMAIS: AnimaisTuplaType[]=[
["🐔", "Cocó", 1.0, true],
["🦩","Flamingo", 12.0, true],
["🐧", "Penguin",6.0,true],
["🦜", "Paraguaio",2.0,false],
];

function App() {

  const exA1: ReactNode[]= [];
  const exB2: ReactNode[] = [];

  for(let i =0; i<ANIMAIS.length; i++){
    let ex=ANIMAIS[i][2] <200.2 ? exA1: exB2;
    
      ex.push(
        <Animal 
        key={ANIMAIS[i][1]}
        icone={ANIMAIS[i][0]} 
        nome={ANIMAIS[i][1]}
        peso={ANIMAIS[i][2]} 
        emExtincao={ANIMAIS[i][3]}
      />
        );
}
  return (
    <div className="app">
      <Exibicao
        abertura={new Date("2024-12-02T08:00:00.000-03:00")}
        fechamento={new Date("2024-12-02T12:00-03:00")} cercado="A1"/>{exA1}

      <Exibicao
        abertura={new Date("2024-12-02T14:00:00.000-03:00")}
        fechamento={new Date("2024-12-02T16:00-03:00")}
        cercado="B2"/>{exB2}
    </div>
  );
}

export default App;
