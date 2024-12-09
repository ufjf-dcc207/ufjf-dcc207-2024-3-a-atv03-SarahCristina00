import Animal from "./Animal";
import Exibicao from "./Exibicao";
import "./App.css";
import { ReactNode } from "react";

function App() {

  const exA1: ReactNode[]= [
    
    <Animal icone="🐔" nome="Cocó" peso={1.0} emExtincao={true} />,
    <Animal icone="🦩" nome="Flamingo" peso={12.0} emExtincao={true} />,

  ];
  const exB2: ReactNode[] = [
    
    <Animal icone="🐧" nome="Penguin" peso={6.0} emExtincao={true} />,
    <Animal icone="🦜" nome="Paraguaio" peso={2.0} emExtincao={false} />,
    
  ];
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
