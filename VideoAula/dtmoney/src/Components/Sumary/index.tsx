import { Container } from "./style";
import IconEntrada from "../../assents/Entradas.svg";
import IconSaida from '../../assents/Saídas.svg'
import IconTotal from '../../assents/Total.svg'

 export function Sumary(){
  return <Container>
    <div>
      <header>
        <p>Entradas</p>
        <img src={IconEntrada} alt="icon de uma seta para cima"  />
      </header>
      <strong>R$ 17.800</strong>
    </div>
    <div>
      <header>
        <p>Saidas</p>
        <img src={IconSaida} alt="icon de uma seta para baixo"  />
      </header>
      <strong> - R$ 1.800</strong>
    </div>
    <div className="highlight-background">
      <header>
        <p>Total</p>
        <img src={IconTotal} alt="icon de uma seta para cima"  />
      </header>
      <strong>R$ 16.000</strong>
    </div>
  </Container>
  

}