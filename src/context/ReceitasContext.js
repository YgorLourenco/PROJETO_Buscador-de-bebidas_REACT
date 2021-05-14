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

    // API responsavel por mostrar os drinks baseado nos dados que o usuário deu sobre os drinks
    useEffect(() => {

        if(consultar) {
            const obterReceitas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nome}&c=${categoria}`

                const resultado = await axios.get(url)

                guardaReceitas(resultado.data.drinks)
                // console.log(resultado.data.drinks)
    
            }
            obterReceitas()
        }

        
    }, [busca, categoria, consultar, nome])

    // Vai distribuir os States para outros componentes
    return ( 
        <ReceitasContext.Provider
            value={{
                receitas,
                buscarReceitas,
                guardarConsultar,
            }}
        >
            {props.children}
        </ReceitasContext.Provider>
     );
}
 
export default ReceitasProvider;