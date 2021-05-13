import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const ReceitasContext = createContext();

const ReceitasProvider = (props) => {

    const [receitas, guardaReceitas] = useState([])

    const [busca, buscarReceitas] = useState({
        nome: '',
        categoria: ''
    })

    const [consultar, guardarConsultar] = useState(false)

    const {nome, categoria} = busca;

    useEffect(() => {

        if(consultar) {
            const obterReceitas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nome}&c=${categoria}`

                const resultado = await axios.get(url)

                guardaReceitas(resultado.data.drinks)
    
            }
            obterReceitas()
        }

        
    }, [busca])

    // Vai distribuir os States para outros componentes
    return ( 
        <ReceitasContext.Provider
            value={{
                buscarReceitas,
                guardarConsultar,
                receitas
            }}
        >
            {props.children}
        </ReceitasContext.Provider>
     );
}
 
export default ReceitasProvider;