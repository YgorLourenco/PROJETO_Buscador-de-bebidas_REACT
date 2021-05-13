import React, {createContext, useState, useEffect}from 'react'
import axios from 'axios'

// Criar o contexto
export const ModalContext = createContext()

const ModalProvider = (props) => {
    // State do Provider
    const [idreceita, guardarIdReceita] = useState(null)
    const [receita, guardarReceita] = useState({})

    // Uma vez que tenhamos uma receita, chamar a API
    useEffect(() => {
        const obterReceitas = async () => {
            if(!idreceita) return;

            const url = `www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceita}` 

            const resultado = await axios.get(url)

            guardarReceita(resultado.data.drinks[0])
        }
        obterReceitas()

    }, [idreceita])

    return (
        <ModalContext.Provider
            value={{
                guardarIdReceita
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}
export default ModalProvider;