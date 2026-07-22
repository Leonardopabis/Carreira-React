import './formulario-de-evento.estilos.css'
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { ListaSuspensa } from "../ListaSuspensa"
import { Botao } from '../Botao';

export function FormularioDeEvento() {

  return (
    <form className="form-evento">
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
          <CampoDeEntrada type="text" id='nomeEvento' placeholder='Summer dev hits' name='nomeEvento' />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada type="text" id='dataEvento' placeholder='XX/XX/XXXX' name='dataEvento' />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Tema do evento</Label>
          <ListaSuspensa name="dataEvento" id="dataEvento"></ListaSuspensa>
        </CampoDeFormulario>
      </div>
      <div className='acoes'>
        <Botao>
          Criar Evento
        </Botao>
      </div>
    </form>
  )
}