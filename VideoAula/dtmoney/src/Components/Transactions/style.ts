import styled from "styled-components";

export const Container=styled.div`

margin-top:6.4rem;

table{
  width: 100%;
  border-spacing:0 0.8rem;
  font-size:1.6rem;
}
th{
  color:var(--text-body);
  text-align: left;
  font-weight: 400;
  padding: 1.6rem 3.2rem;
  line-height: 2.4rem;
}

td{
  padding: 1.6rem 3.2rem;
  background:var(--shape);
  border:0;
  color:var(--text-body);
  border-radius: 0.5rem;
  &:first-child{
    color:var(--text-title);
  }
  &.deposit{
    color:var(--green)
  }
  &.withdraw{
    color:var(--red)
  }
  
}


`