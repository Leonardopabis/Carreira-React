import "./lista-suspensa.estilos.css"

export function ListaSuspensa(props) {
    return (
        <select {...props} className="select-form">
            <option className="default-select" value="" disabled selected hidden>Selecione uma opção</option>
        </select>
    )
}