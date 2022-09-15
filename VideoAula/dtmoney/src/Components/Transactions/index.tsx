import{useEffect} from "react";
import { api } from "../../Services/Api";
import { Container } from "./style"
import { useState } from 'react';

export function Transactions(){

  interface transaction{
    id:number,
    title:string,
    value:number,
    type:string,
    category:string,
    createdAt:string

  }
  const [transactions,setTransaction] = useState<transaction[]>([]);
  useEffect(() =>{
    api.get('/transactions').then(response=> setTransaction(response.data.transactions));

  },[])


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