import './titulo-formulario.estilos.css'

// no react, componente são funções

//props é um OBJETO
//props.algumacoisa
export function TituloFormulario(props) {
  return(
    <h2 className='titulo-form'>{props.children}</h2>
  )
}