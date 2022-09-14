import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createServer } from 'miragejs';



createServer(
  {
    routes(){
      this.namespace = 'api';
      this.get('/transactions',() =>{
        return[
          {
            id:1,
            title: "salario",
            amount:12000,
            type:'deposit',
            category:'salario',
            createdAt:new Date()

          }
        ]
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
