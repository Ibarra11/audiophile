import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap');
  :root{
    --dark-orange: 	hsla(22, 65%, 57%, 1);
    --dark-orange-alpha50: hsla(22, 65%, 57%, .5);
    --light-orange: #FBAF85;
    --white: #FFFFFF;
    --gray: hsla(0, 0%, 84.31%);
    --gray-alpha-25: hsla(0, 0%, 84.31%, 0.25);
    --gray-alpha-50: hsla(0, 0%, 84.31%, 0.50);
    --light-gray: #FAFAFA;
    --primary-black: #000000;
    --secondary-black: #101010;
    font-family: "Manrope", sans-serif;
  }
  
   html,body, #root{
     height: 100%;
   }
   h1, h2, h3, h4, h5,h6, p{
     margin: 0;
   }
`;
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
