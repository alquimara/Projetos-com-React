import logoImg from '../../assents/Logo.svg'
import { Container, Content } from './style';

export function Header(){
  return <Container>
    <Content>
    <img src={logoImg} alt="logo do dt-money" />
    <button type='button'>
      Nova transação
    </button>
    </Content>
  </Container>

}