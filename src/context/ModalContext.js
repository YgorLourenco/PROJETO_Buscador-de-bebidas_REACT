import React, {createContext, useState, useEffect}from 'react'
import axios from 'axios'

// Criar o contexto
export const ModalContext = createContext()

const ModalProvider = (props) => {
    // State do Provider
    const [idreceita, guardarIdReceita] = useState(null)
    const [informacao, guardarReceita] = useState({})

    // Uma vez que tenhamos uma receita, chamar a API. API responsavel pela receita dos drinks
    useEffect(() => {
        const obterReceita = async () => {
            if(!idreceita) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceita}` 

            const resultado = await axios.get(url)

            guardarReceita(resultado.data.drinks[0]);
            console.log(resultado.data.drinks[0])
        }
        obterReceita()

    }, [idreceita])

    return (
        <ModalContext.Provider
            value={{
                informacao,
                guardarIdReceita,
                guardarReceita
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}
export default ModalProvider;