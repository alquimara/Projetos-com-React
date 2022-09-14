import{useEffect} from "react";
import { api } from "../../Services/Api";
import { Container } from "./style"

export function Transactions(){
  useEffect(() =>{
    api.get('/transactions').then(response=> console.log(response.data));

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
        <tr>
          <td>compras do mês</td>
          <td className="deposit">-500</td>
          <td>Mercado</td>
          <td>14/09/2022</td>
        </tr>
        <tr>
          <td>aluguel</td>
          <td className="withdraw">250</td>
          <td>casa</td>
          <td>14/09/2022</td>
        </tr>
        <tr>
          <td>energia</td>
          <td className="deposit">-200</td>
          <td>casa</td>
          <td>14/09/2022</td>
        </tr>
      </tbody>
    </table>
  
  </Container>)
}