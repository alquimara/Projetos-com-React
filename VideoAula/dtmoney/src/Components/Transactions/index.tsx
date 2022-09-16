
import { Container } from "./style"
import { UseTransaction } from '../../hooks/UseTransactionContext';

export function Transactions(){
const {transactions} = UseTransaction();

  return(
  <Container>
    <table>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
      </tr>
      </thead>
      <tbody>
        {transactions.map(transaction=>(
          <tr key={transaction.id}>
          <td>{transaction.title}</td>
          <td className={transaction.type}>{
            new Intl.NumberFormat('pt-Br',{
              style: 'currency',
              currency: 'BRL',
            }).format(transaction.value)}
            </td>
          <td>{transaction.category}</td>
          <td>{new Intl.DateTimeFormat('pt-Br').format(new Date(transaction.createdAt))}</td>
        </tr>
        )
        
        )}
        
      
      </tbody>
    </table>
  
  </Container>)
}