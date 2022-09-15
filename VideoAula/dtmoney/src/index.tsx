import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createServer, Model } from 'miragejs';
import { request } from 'http';
import { Transactions } from './Components/Transactions/index';



createServer(
  {
    models:{
      transaction:Model

    },
    seeds(server) {
      server.db.loadData({
        transactions:[
          {
            id:1,
            title:'desenvolvimento web',
            value:3000,
            type:'deposit',
            category:'Dev',
            createdAt: new Date('2022-09-15 04:02:00')

          },
          {
            id:2,
            title:'compras da semana',
            value:300,
            type:'withdraw',
            category:'Mercado',
            createdAt: new Date('2022-09-16 12:02:00')

          }
      ]
      })
    },
    routes(){
      this.namespace = 'api';
      this.get('/transactions',() =>{
        return this.schema.all('transaction')
      })
      this.post('/transaction',(schema,request) =>{
        const data = JSON.parse(request.requestBody)

        return schema.create('transaction', data)
      })
    }
  }
)


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
