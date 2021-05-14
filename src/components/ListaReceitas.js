import React, {useContext} from 'react'
import Receita from './Receita'
import {ReceitasContext} from '../context/ReceitasContext'


const ListaReceitas = () => {

    // Extrair receitas
    const {receitas} = useContext(ReceitasContext)
    // console.log(receitas)
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