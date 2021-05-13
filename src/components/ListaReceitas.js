import React, {useContext} from 'react'
import {ReceitasContext} from '../context/ReceitasContext'
import Receita from './Receita'

const ListaReceitas = () => {

    // Extrair receitas
    const {receitas} = useContext(ReceitasContext)

    return (
        <div className='row mt-5'>
            {receitas.map(receita => (
                <Receita 
                    key={receita.idDrink}
                    receita={receita}
                />
            ))}
        </div>
    )
}

export default ListaReceitas