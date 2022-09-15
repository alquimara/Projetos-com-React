import Modal from 'react-modal'
import { Container } from './style';
import  IconFechar from '../../Assents/Botão - Fechar.svg'

interface NewTransitionModalProps{
  isNewTransitonModalOpen:boolean;
  onCloseNewModal:()=>void;
}


export function NewTransitionModal({isNewTransitonModalOpen,onCloseNewModal}:NewTransitionModalProps){

  return(
  <Modal isOpen={isNewTransitonModalOpen} onRequestClose={onCloseNewModal} overlayClassName="react-modal-overlay" className="react-modal-content">
    <button type='button' 
      onClick={onCloseNewModal} 
      className="react-modal-close">
      <img src={IconFechar} alt="botao de fechar o modal"/>
    </button>
    <Container>
      <form>
        <h2>Cadastrar Transação</h2>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder='Preço'/>
        <input type="text" placeholder='Categoria'/>
        <button type="submit">Cadastrar</button>
      </form>
  
    </Container>
</Modal>)
}