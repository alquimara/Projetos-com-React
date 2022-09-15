import { Container } from "./style";
import IconEntrada from "../../Assents/Entradas.svg";
import IconSaida from '../../Assents/Saídas.svg'
import IconTotal from '../../Assents/Total.svg'

 export function Sumary(){
  return <Container>
    <div>
      <header className="deposit">
        <p>Entradas</p>
        <img src={IconEntrada} alt="icon de uma seta para cima"  />
      </header>
      <strong className="deposit">R$ 17.800</strong>
    </div>
    <div >
      <header className="withdraw">
        <p>Saidas</p>
        <img src={IconSaida} alt="icon de uma seta para baixo"  />
      </header>
      <strong className="withdraw"> - R$ 1.800</strong>
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