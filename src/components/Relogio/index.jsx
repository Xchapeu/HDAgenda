import { useEffect, useState } from "react"

export const Relogio = () => {
    const [hora, setHora] = useState([]);
    
    function atualizar() {
        setInterval(() => setHora(new Date().toLocaleTimeString("pt-br")), 1000);
        console.log(hora)
    }

    useEffect(() => {
        atualizar()
    }, [hora]);

    return(
        <>
            <span>
                <time>{ hora }</time>
            </span>
        </>
    )
}