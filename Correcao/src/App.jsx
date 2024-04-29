import './App.css'
import Evento from './components/Evento.jsx'
import Galeria from './components/Galeria.jsx'

function App() {
  return(
    <>
    <Evento
    titulo={"Evento do senai"}
    descricao={"Descrição do evento"}
    horario={"29/04/2024 as 11 horas"}
    local={"Senai São José"}
    />
    <Galeria />
    </>
  )
}

export default App