import styled from "styled-components";

export const Container = styled.header`
background: var(--blue);
`

export const Content = styled.div`
max-width: 1120px;
margin: 0 auto; //centralizar
padding: 3.2rem 1.6rem 17rem;
display: flex;
align-items: center;
justify-content: space-between;

button{
  padding:1.2rem 3.2rem;
  background:var(--blue-ligth);
  border:0;
  border-radius:0.5rem;
  text-align:center;
  color:var(--shape);
  font-size: 1.6rem;
  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.9);//deixa o botao um pouco mais escuro
}
}
`