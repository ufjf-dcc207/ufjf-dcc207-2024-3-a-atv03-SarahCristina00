import Animal from "./Animal";
import Exibicao from "./Exibicao";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Exibicao
        abertura={new Date("2024-12-02T08:00:00.000-03:00")}
        fechamento={new Date("2024-12-02T12:00-03:00")} cercado="A1"/>

        <Animal icone="🐔" nome="Cocó" peso={1.0} emExtincao={true} />
        <Animal icone="🦩" nome="Flamingo" peso={12.0} emExtincao={true} />
      <Exibicao
        abertura={new Date("2024-12-02T14:00:00.000-03:00")}
        fechamento={new Date("2024-12-02T16:00-03:00")}
        cercado="B2"/>
        <Animal icone="🐧" nome="Penguin" peso={6.0} emExtincao={true} />
        <Animal icone="🦜" nome="Paraguaio" peso={2.0} emExtincao={false} />
    </div>
  );
}

export default App;
