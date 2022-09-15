import Modal from 'react-modal'
import { Container, RadioButton, TransitionTypeContainer } from './style';
import  IconFechar from '../../Assents/Botão - Fechar.svg'
import IconEntrada from '../../Assents/Entradas.svg'
import IconSaida from '../../Assents/Saídas.svg'
import { FormEvent, useState } from 'react';
import { api } from '../../Services/Api';

interface NewTransitionModalProps{
  isNewTransitonModalOpen:boolean;
  onCloseNewModal:()=>void;
}


export function NewTransitionModal({isNewTransitonModalOpen,onCloseNewModal}:NewTransitionModalProps){
  const[title,setTitle] = useState('');
  const[value,setValue] = useState(Number);
  const[category,setCategory] = useState('');
  const[type,setType]=useState('deposit');

  function handleCreateNewTransition(event:FormEvent){
    event.preventDefault();
    const data={
      title,
      value,
      type,
      category,

    }
    api.post('/transaction', data);

  }

  return(
  <Modal isOpen={isNewTransitonModalOpen} onRequestClose={onCloseNewModal} overlayClassName="react-modal-overlay" className="react-modal-content">
    <button type='button' 
      onClick={onCloseNewModal} 
      className="react-modal-close">
      <img src={IconFechar} alt="botao de fechar o modal"/>
    </button>
    <Container onSubmit={handleCreateNewTransition}>
      <form>
        <h2>Cadastrar Transação</h2>
        <input type="text" placeholder="Nome" value={title} onChange={event => setTitle(event.target.value)}/>
        <input type="number" placeholder="Preço" onChange={event => setValue(Number(event.target.value))}/>
        <TransitionTypeContainer>
          <RadioButton
          type="button" 
          onClick={() => setType("deposit")}
          isActive={type==='deposit'} 
          ActiveColor='green'
          >
            <img src={IconEntrada} alt="icon de entrada"/>
            <p>Entrada</p>
          </RadioButton>

          <RadioButton type= "button"
          onClick={() => setType("withdraw")}
          isActive={type==='withdraw'}
          ActiveColor='red'

          >
            <img src={IconSaida} alt="icon de entrada"/>
            <p>Saida</p>
          </RadioButton>
        </TransitionTypeContainer>
        <input type="text" placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)}/>
        <button type="submit">Cadastrar</button>
      </form>
  
    </Container>
</Modal>)
}