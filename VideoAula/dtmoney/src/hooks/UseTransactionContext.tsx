import {createContext, useEffect, useState, ReactNode, useContext} from 'react'
import { api } from '../Services/Api';
import { Transactions } from '../Components/Transactions/index';


interface Transactions{
  id:number,
  title:string,
  value:number,
  type:string,
  category:string,
  createdAt:string

}
type TransactionInput = Omit<Transactions,| 'id' | 'createdAt'>//estou criando um type do tipo Transation na qual ela vai herdar todas as outras variaveis, menos o id e o createdAt
interface TransactionsProviderProps{
  children: ReactNode;
}
interface TransactionContextData{
  transactions:Transactions[],
  CreateTransaction:(Transactions:TransactionInput)=>Promise<void> //a funcao é assicronica, e toda async retorn um promise
}

export const TransactionContext=createContext<TransactionContextData>({} as TransactionContextData);



export function TransactionsProvider({children}:TransactionsProviderProps){
 
  const [transactions,setTransactions] = useState<Transactions[]>([]);
  useEffect(() =>{
    api.get('/transactions').then(response=> setTransactions(response.data.transactions));

  },[]);
  async function CreateTransaction(transactionInput:TransactionInput){
 
    const response = await api.post('/transaction', {...transactionInput,createdAt:new Date()});
    const{transaction} = response.data;
    setTransactions([...transactions, transaction])
  
   }
  

  return(
    <TransactionContext.Provider value={{ transactions,CreateTransaction}}>
      {children}
    </TransactionContext.Provider>
    
  )
}
export function UseTransaction(){
  const context = useContext(TransactionContext);
  return context;

}
