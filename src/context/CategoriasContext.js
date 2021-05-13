// Context passa props do useState de forma menos trabalhosa de vez ter que passar por vários components antes.
import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'

// Criando o Context
export const CategoriasContext = createContext()

// Prove onde se encontra as funções e state
const CategoriasProvider = (props) => {
    // Criar o state de Context
    const [categorias, guardarCategorias] = useState([])

    // Executando o chamado de API. API responsavel por puxar os tipos de categoria de drink.
    useEffect(() => {
        const obterCategorias = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`

            const categorias = await axios.get(url)

            guardarCategorias(categorias.data.drinks)
        }
        obterCategorias()
    })

    // CategoriasContext fica em um nível acima fornecendo o componente dele 
    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}
export default CategoriasProvider;