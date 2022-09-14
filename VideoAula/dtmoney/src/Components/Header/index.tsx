import logoImg from '../../Assents/Logo.svg'
import { Container, Content } from './style';
import{useState} from 'react';

interface HeaderProps{
  onOpenNewTransitionModal:()=>void;

}

export function Header({onOpenNewTransitionModal}:HeaderProps){

  return <Container>
    <Content>
    <img src={logoImg} alt="logo do dt-money" />
    <button type='button' onClick={onOpenNewTransitionModal}>
      Nova transação
    </button>
    
    </Content>
  </Container>

}