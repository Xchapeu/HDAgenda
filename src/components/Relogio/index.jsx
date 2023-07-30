import { useEffect, useState } from "react"
import './style.css'

export const Relogio = () => {
    const [hora, setHora] = useState([]);
    
    useEffect(() => {
        const atualizar = () => setInterval(() => setHora(new Date().toLocaleTimeString("pt-br")), 1000);      
        atualizar()
    }, [hora]);

    return(
        <>
            <span className="time-header">
                <time>{ hora }</time>
            </span>
        </>
    )
}