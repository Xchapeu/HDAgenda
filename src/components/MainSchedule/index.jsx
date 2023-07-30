import { useEffect, useState } from "react";
import './style.css'

export const MainSchedule = () => {
    const [data, setData] = useState([]);
    const [agenda, setAgenda] = useState([])
    const preAgenda = [];
    const horarios = [
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00'
    ]

    const estagiarios = [
        'Julia',
        'Rodrigo',
        'Romario',
        'Thiago',
        'Vinicius',
        'Wesley'
    ]

    const shuffle = array => {
        let currentIndex = array.length, randomIndex;
        
        while(currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
        }

        return array;
    }

    const randomEstagiarios = shuffle(estagiarios);

    const getAgenda = () => {
        let i = 0;
        horarios.map(hora => {
            if(hora === "15:00") {
                preAgenda.push({ hora: hora, nome: "Matheus" })
            } else if(hora === "12:00") {
                preAgenda.push({ hora: hora, nome: "Almoço" })      
            } else {
                preAgenda.push({ hora: hora, nome: randomEstagiarios[i] })
                i++;
            }
        })

        setAgenda(preAgenda)
    }


    const dataAtendimento = () => {
        setData(new Date().toLocaleDateString())
    }

    useEffect(() => {
        dataAtendimento();
        getAgenda()
    }, [])

    return(
        <div className="main-container">
            <h2>{ data }</h2>
            <ul className="list-container">
                {
                    agenda.map(a => <li key={a.hora - a.nome}><time>{a.hora}</time>  -  {a.nome}</li> )
                }
            </ul>
        </div>
    );
}