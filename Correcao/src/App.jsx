import './App.css'
import Evento from './components/Evento'

function app() {
  return(
    <>
    <Evento
    titulo={"Evento do senai"}
    descricao={"Descrição do evento"}
    horario={"29/04/2024 as 11 horas"}
    local={"Senai São José"}
    />
    </>
   
  )
}