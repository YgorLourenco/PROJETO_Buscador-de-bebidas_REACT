import React, {useContext, useState} from 'react'
import {CategoriasContext} from '../context/CategoriasContext'
import {ReceitasContext} from '../context/ReceitasContext'


const Formulario = () => {

    // useState para guardar o resultado da busca
    const [busca, guardarBusca] = useState({
        nome:'',
        categoria:''
    })

    // Função para ler os conteúdos
    const obterDadosReceita = e => {
        guardarBusca({
        ...busca,
        [e.target.name] : e.target.value
        })
    }

    // useContext sendo usado para enviar o resultado da API para as opções.
    const {categorias} = useContext(CategoriasContext)  
    // useContext sendo usado para armazenar os dados do submit ao apertar o botão
    const {buscarReceitas, guardarConsultar} = useContext(ReceitasContext)

    return ( 
        <form
            className='col-12'
            onSubmit={e => {
                e.preventDefault()
                buscarReceitas(busca)
                guardarConsultar(true)
            }}
        >
            <fieldset className='text-center'>
                <legend>Buscar bebidas por categoria o ingrediente</legend>
            </fieldset>

            <div className='row'>
                <div className='col-md-4'>
                    <input 
                        name='nome'
                        className='form-control'
                        type='text'
                        placeholder='Buscar por Ingrediente'
                        onChange={obterDadosReceita}
                    />
                </div>
                <div>
                    <select
                        className='form-control'
                        name='categoria'
                        onChange={obterDadosReceita}
                    >
                        <option value=''>-- Selecione a Categoria --</option>
                        {categorias.map(categoria => (
                            <option 
                            key={categoria.strCategory}
                            value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className='col-md-4'>
                    <input
                        type='submit'
                        className='btn btn-block btn-primary'
                        value='Buscar Bebidas'
                    ></input>
                </div>
            </div>

        </form>
     );
}
 
export default Formulario;