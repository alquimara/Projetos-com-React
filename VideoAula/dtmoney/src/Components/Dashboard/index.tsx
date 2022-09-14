import { Sumary } from "../Sumary"
import { Transactions } from "../Transactions"
import { Container } from "./style"


export function Dashboard(){
  return <Container>
    <Sumary/>
    <Transactions/>
  </Container>

}