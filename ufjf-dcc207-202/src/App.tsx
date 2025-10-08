import Animal from './Animal'
import './App.css'

function App() {

  return (
    <div>
     <Animal icone='🦁' nome="Leao" peso={190} emExtincao={true}/>
     <Animal icone='🦒' nome="Girafa" peso={1200} emExtincao={true}/>
     <Animal icone='🦩' nome="Flamingo" peso={12.0} emExtincao={true}/>
     <Animal icone='🦜' nome="Papagaio" peso={0.4} emExtincao={false}/>
    </div>
  )
}

export default App
