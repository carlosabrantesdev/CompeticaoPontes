import { useState, useEffect } from 'react'
import './Pontes.css'
import Linhas from './components/Linhas'

function Pontes() {
    const [linhas] = useState([
        { "ordem": "23", "kilo": "10KG" },
        { "ordem": "22", "kilo": "10KG" },
        { "ordem": "21", "kilo": "10KG" },
        { "ordem": "20", "kilo": "10KG" },
        { "ordem": "19", "kilo": "10KG" },
        { "ordem": "18", "kilo": "10KG" },
        { "ordem": "17", "kilo": "10KG" },
        { "ordem": "16", "kilo": "10KG" },
        { "ordem": "15", "kilo": "5KG" },
        { "ordem": "14", "kilo": "5KG" },
        { "ordem": "13", "kilo": "5KG" },
        { "ordem": "12", "kilo": "10KG" },
        { "ordem": "11", "kilo": "10KG" },
        { "ordem": "10", "kilo": "10KG" },
        { "ordem": "9", "kilo": "5KG",},
        { "ordem": "8", "kilo": "5KG" },
        { "ordem": "7", "kilo": "5KG" },
        { "ordem": "6", "kilo": "10KG" },
        { "ordem": "5", "kilo": "10KG" },
        { "ordem": "4", "kilo": "10KG" },
        { "ordem": "3", "kilo": "5KG" },
        { "ordem": "2", "kilo": "5KG" },
        { "ordem": "1", "kilo": "5KG" },
        { "tipo": "teste", "ordem": "24", "kilo": "10KG", "kilorecorde": "15KG" },
    ])

    const [contador, setContador] = useState(10)
    const [ativo, setAtivo] = useState(false)
    const [startTime, setStartTime] = useState(null)
    const [equipe, setEquipe] = useState("Carregando")

    const [dados, setDados] = useState({
        equipe: "Carregando",
        peso: "0KG",
        cargaEstimada: "0KG",
        proximaCarga: "0KG"
    })

    useEffect(() => {
        fetch("https://exemploDeAPI/exemplo/pontes/1")
            .then(res => res.json())
            .then(data => {
                setDados({
                    peso: data.peso || "0KG",
                    cargaEstimada: data.cargaEstimada || "0KG",
                    proximaCarga: data.proximaCarga || "0KG"
                })
            })
            .catch(err => {
                console.error("Erro ao buscar dados:", err)
            })
    }, [])

    useEffect(() => {
        let intervalo
        if (ativo && startTime) {
            intervalo = setInterval(() => {
                const agora = Date.now()
                const segundosPassados = Math.floor((agora - startTime) / 1000)
                const novoValor = Math.max(10 - segundosPassados, 0)
                setContador(novoValor)

                if (novoValor === 0) {
                    setAtivo(false)
                    setContador(10)
                }
            }, 100)
        }

        return () => clearInterval(intervalo)
    }, [ativo, startTime])

    const handleClick = () => {
        if (!ativo) {
            setStartTime(Date.now())
            setContador(10)
            setAtivo(true)
        } else {
            setAtivo(false)
        }
    }

    return (
        <div className='pontes'>

            <div className='pesos'>
                {linhas.map((linha, index) => (
                    <Linhas
                        key={index}
                        tipo={linha.tipo}
                        kilo={linha.kilo}
                        kilorecorde={linha.kilorecorde}
                    />
                ))}
            </div>

            <div className='principal'>
                <div className='equipe'>
                    <h2>{equipe}</h2>
                    <h3>{dados.peso}</h3>
                </div>
                <div className='contagem'>
                    <div className='circulo' onClick={handleClick}>
                        <h2>{contador}</h2>
                    </div>
                </div>
                <div className='status'>
                    <h3>{ativo ? "Contando..." : "Contador"}</h3>
                </div>
            </div>

            <div className='papel'>
                <div className='icones'>
                    <img src="/icone.png" alt="" />
                    <img src="/ponteicone.png" alt="" />
                </div>
                <div className='cargas'>
                    <div className='estimada'>
                        <h1>CARGA</h1>
                        <h1>ESTIMADA</h1>
                        <h2>{dados.cargaEstimada}</h2>
                    </div>
                    <div className='proxima'>
                        <h1>CARGA</h1>
                        <h1>PROXIMA</h1>
                        <h2>{dados.proximaCarga}</h2>
                    </div>
                </div>
                <div className='apoio'>
                    <div className='apoiotexto'>
                        <h2>APOIO</h2>
                    </div>
                    <div className='imagens'>
                        <img src="/proec.png" alt="" />
                        <img src="/prograd.png" alt="" />
                        <img src="/ufersa.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pontes
