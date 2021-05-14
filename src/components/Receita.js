import React, {useContext, useState} from 'react'
import {ModalContext} from '../context/ModalContext'
// Os dois importes abaixo e para puxar os components do material-ui pra ca!
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


// "Function getModalStyle" e o "const useStyles = makeStyles" são usados para a configuração do botão de modal
function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));


const Receita = ({receita}) => {

    // Configuração do modal de material-ui
    const [modalStyle] = useState(getModalStyle)
    const [open, setOpen] = useState(false)

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    // Extrair os valores do context
    const {informacao, guardarIdReceita, guardarReceita} = useContext(ModalContext)

    // Mostrar e formatar os ingredientes
    const mostrarIngredientes = informacao => {
        let ingredientes = []
        for(let i = 1; i < 16; i++) {
            if(informacao[`strIngredient${i}`]) {
                ingredientes.push(
                    <li>{informacao[`strIngredient${i}`]} {informacao[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes;
    }

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
                            handleOpen()
                            // console.log(receita.idDrink)
                        }}
                    >
                        Ver Receita
                    </button>

                    <Modal
                        open={open}
                        onClose={() => {
                            // Vai desativar o State guardarIdReceita
                            guardarIdReceita(null)
                            guardarReceita({})
                            handleClose()
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>

                            <h2>{informacao.strDrink}</h2>
                            <h3 className='mt-4'>Instruções</h3>
                            <p>
                                {informacao.strInstructions}
                            </p>

                            <img className='img-fluid my-4' src={informacao.strDrinkThumb} alt='Receita' />

                            <h3>Ingredientes e Quantidades</h3>
                            <ul>
                                {mostrarIngredientes(informacao)}
                            </ul>

                        </div>
                    </Modal>

                </div>
            </div>
        </div>
     );
}
 
export default Receita;