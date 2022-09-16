
import { Container } from "./style";
import IconEntrada from "../../Assents/Entradas.svg";
import IconSaida from '../../Assents/Saídas.svg'
import IconTotal from '../../Assents/Total.svg'
import {UseTransaction} from '../../hooks/UseTransactionContext';


 export function Sumary(){
  const {transactions} = UseTransaction()
  const sumary = transactions.reduce((acc, transaction) =>{
    if(transaction.type === 'deposit'){
      acc.deposit += transaction.value;
      acc.total += transaction.value;

    }
    else{
      acc.withdraw += transaction.value;
      acc.total -= transaction.value;
    }
    return acc;

  },{
    deposit:0,
    withdraw:0,
    total:0
  })

  return <Container>
    <div>
      <header className="deposit">
        <p>Entradas</p>
        <img src={IconEntrada} alt="icon de uma seta para cima"  />
      </header>
      <strong className="deposit">{
            new Intl.NumberFormat('pt-Br',{
              style: 'currency',
              currency: 'BRL',
            }).format(sumary.deposit)}</strong>
    </div>
    <div >
      <header className="withdraw">
        <p>Saidas</p>
        <img src={IconSaida} alt="icon de uma seta para baixo"  />
      </header>
      <strong className="withdraw">-{
            new Intl.NumberFormat('pt-Br',{
              style: 'currency',
              currency: 'BRL',
            }).format(sumary.withdraw)}</strong>
    </div>
    <div className="highlight-background">
      <header>
        <p>Total</p>
        <img src={IconTotal} alt="icon de uma seta para cima"  />
      </header>
      <strong>{
            new Intl.NumberFormat('pt-Br',{
              style: 'currency',
              currency: 'BRL',
            }).format(sumary.total)}</strong>
    </div>
  </Container>
  

}