import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap');
  :root{
    --dark-orange: #D87D4A;
    --light-orange: #FBAF85;
    --white: #FFFFFF;
    --gray: #F1F1F1;
    --light-gray: #FAFAFA;
    --primary-black: #000000;
    --secondary-black: #101010;
    font-family: "Manrope", sans-serif;
  }
  
   html,body, #root{
    
     height: 100%;
   }
`;
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
