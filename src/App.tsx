import Animal from './Animal';
import './App.css'


function App() {
 

  return (
  <div className = "app">
        <Animal icone= "🐔" nome="Cocó" peso={1.0} emExtincao={true}/>
        <Animal icone= "🦩" nome="Flamingo" peso={12.0} emExtincao={true}/>
        <Animal icone="🐧" nome="Penguin" peso={6.0} emExtincao={true}/>
        <Animal icone= "🦜" nome="Paraguaio" peso={2.0} emExtincao={false}/>
    </div>
  );
}
   

export default App
