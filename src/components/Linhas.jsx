import { useState } from 'react'
import '../Pontes.css'

function Linhas(props) {
    return (
        <div className='linhas'>
            <div className='linha'>
                <div
                    className={`caixa ${!props.tipo ? 'vazio' : ''}`}
                    id={props.tipo ? 'tipo' : undefined}
                >
                    <p>{props.tipo || ''}</p>
                </div>

                <div
                    className={`caixa ${!props.kilo ? 'vazio' : ''}`}
                    id={props.kilo ? 'kilo' : undefined}
                >
                    <p>{props.kilo || ''}</p>
                </div>

                <div
                    className={`caixa ${!props.kilorecorde ? 'vazio' : ''}`}
                    id={props.kilorecorde ? 'kilorecorde' : undefined}
                >
                    <p>{props.kilorecorde || ''}</p>
                </div>
            </div>
        </div>
    )
}

export default Linhas
