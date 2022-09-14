import styled from "styled-components";

export const Container = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
gap:3.2rem;
margin-top: -16rem;

div{
  background: var(--shape);
  padding: 2.6rem 2.1rem 1.9rem 3.2rem ;
  border-radius: 0.5rem;
  color:var(--text-title);

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.6rem;
  }
  strong{
    display: block; //para conseguir pegar o margin top
    font-size: 3.6rem;
    margin-top: 1.5rem;
    font-weight: 500;
    line-height: 5.4rem;
  }

  &.highlight-background{
    background: var(--green);
    color:var(--shape);
  }
}


`