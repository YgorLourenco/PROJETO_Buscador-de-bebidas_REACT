import React, {useContext} from 'react'
import {ModalContext} from '../context/ModalContext'

const Receita = ({receita}) => {

    // Extrair os valores do context
    const {guardarIdReceita} = useContext(ModalContext)

    return ( 
        <div className='col-md-4 mb-3'>
            <div className='card'>
                <h2 className='card-header'>{receita.strDrink}</h2>

                <img className='card-img-top' src={receita.strDrinkThumb} alt={`Imagem de ${receita.strDrink}`} />

                <div className='card-body'>
                    <button
                        type='button'
                        className='btn btn-block btn-primary'
                        onClick={() => {
                            guardarIdReceita(receita.idDrink)
                        }}
                    >
                        Ver Receita
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Receita;