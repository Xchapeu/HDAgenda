import { Relogio } from "../Relogio"
import './style.css'

export const Header = () => {
    return(
        <div className="header-container">
            <h1 className="title">Painel de Atendimento HelpDesk</h1>
            <Relogio />
        </div>
    )
}