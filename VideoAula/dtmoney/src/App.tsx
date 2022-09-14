
import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import { GlobalStyle } from "./Styles/GlobalStyle";
import Modal from 'react-modal'
import{useState} from 'react'

Modal.setAppElement('#root')

export function App() {
  
  const[isNewTransitonModalOpen, setIsNewTransitionModalOpen]=useState(false);

  function handleOpenNewModal(){
    setIsNewTransitionModalOpen(true);
  }

  function handleCloseNewModal(){
    setIsNewTransitionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransitionModal={handleOpenNewModal}/>
      <Dashboard/>
      <Modal isOpen={isNewTransitonModalOpen} onRequestClose={handleCloseNewModal}>
      <h2>Cadastrar Transacoes</h2>
    </Modal>
      <GlobalStyle/>
    </>
  );
}

export default App;
