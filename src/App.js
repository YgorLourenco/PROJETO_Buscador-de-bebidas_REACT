import { Fragment } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import CategoriasProvider from './context/CategoriasContext'
import ReceitasProvider from './context/ReceitasContext'
import ListaReceitas from './components/ListaReceitas'
import ModalContext from './context/ModalContext'

function App() {
  return (
    <CategoriasProvider>
      <ReceitasProvider>
        <ModalContext>

          <Header />

          <div className='container mt-5'>
            <div className='row'>
              <Formulario />
            </div>
            <ListaReceitas/>
          </div>
          
      </ModalContext>
      </ReceitasProvider>
    </CategoriasProvider>
  );
}

export default App;
