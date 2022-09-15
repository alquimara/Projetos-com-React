import styled from "styled-components";

export const Container = styled.div`

h2{
  color:var(--text-title);
  font-size:2.4rem;
  margin-bottom:3.2rem;
}
input{
  width:100%;
  display:flex;
  padding:1.8rem 2.4rem 1.8rem; 
  background:var(--input-body);
  border: 1px solid #D7D7D7;
  border-radius:0.5rem;
  font-size:1.6rem;
  &::placeholder{
    color:var(--text-body);
    font-size:1.6rem;
  }
  & + input{ //quando eu quiser colocar top so quando tiver um input antes
    margin-top:1.6rem;
  }

}
button[type="submit"]{
  width:100%;
  margin-top:2.4rem;
  background:var(--green);
  color:var(--shape);
  text-align:center;
  font-size:1.6rem;
  font-weight: 600;
  padding:2rem 0;
  border:0;
  border-radius:0.5rem;
  transition: filter 0.2s;
  &:hover{
    filter: brightness(0.9);
  }


}



`
