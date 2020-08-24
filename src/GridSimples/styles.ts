import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 20vh 70vh 10vh;
  grid-template-areas: 
  "header header" /* na linha 1 header(variavel) ocupa 2 colunas, adiciona um . caso queira apenas 1 coluna ex.: "header ." */
  "main aside"  /* na linha 1 main(variavel) ocupa 1 coluna */
  "footer footer"

  /* grid-gap: 20px; define o intervalo entre linhas e colunas */
`;

export const Header = styled.header`
  background: yellow;
  /*grid-column-start: 1; /*  inicio da coluna na primeira linha virtual */
  /*grid-column-end: 3;  /* final da coluna */
  /* grid-row-start: 3;
  grid-row-end: 4;
  grid-column: 1/3;
  grid-row: 3/4; */
  grid-area: header;
`;

export const Main = styled.main`
  background: blue;
  /* grid-column-start: 1;
  grid-column-end: 2; */
  grid-area: main;
`;

export const Aside = styled.aside`
  background: green;
  /* grid-column-start: 2;
  grid-column-end: 3; */
  grid-area: aside;
`;

export const Footer = styled.footer`
  background: red;
  /* grid-column-start: 1;
  grid-column-end: 3; */
  grid-area: footer;
`;
