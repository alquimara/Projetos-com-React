import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  --background:#f0f2f5;
  --shape:#ffffff;
  --text-title:#363f5f;
  --text-body:#969cb3;
  --red:#e52e4d;
  --blue:#5429cc;
  --blue-ligth:#6933ff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{
  font-size: 62.5%;//transformar 1rem em 10px

  @media(max-width: 1080px){
    font-size: 93.5%; //15px
  }

  @media (max-width: 720px) {
    font-size: 87.5%; //14px
    
  }
}
body{
  background: var(--background);
  -webkit-font-smoothing:antialiased;
}
body,input,textarea,button{
  font-family: 'Poppins', sans-serif;
  font-weight: 400; //tamanho dessa fonte

}
h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}
button{
  cursor: pointer;
}
[disable]{
  opacity: 0.6;
  cursor: not-allowed;
}




`