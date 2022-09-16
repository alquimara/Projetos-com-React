
import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import { GlobalStyle } from "./Styles/GlobalStyle";
import{useState} from 'react'
import { NewTransitionModal } from "./Components/NewTransitionModal";
import Modal from 'react-modal';
import { TransactionContext, TransactionsProvider } from "./hooks/UseTransactionContext";

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
    <TransactionsProvider>
      <Header onOpenNewTransitionModal={handleOpenNewModal}/>
      <Dashboard/>
      <NewTransitionModal isNewTransitonModalOpen={isNewTransitonModalOpen} onCloseNewModal={handleCloseNewModal}/>
      <GlobalStyle/>
    </TransactionsProvider>
  );
}

export default App;
