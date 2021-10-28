import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

/* Reset CSS */
  /* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
/* End of Reset css */

/* Defined Global Styles */
 @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap');
  :root{
    --clr-primary-orange: 22 65% 57%;
    --clr-secondary-orange: 21 94% 75%;
    --clr-white: 0 0% 100%;
    --clr-primary-gray: 0, 0%, 84.31%;

    --clr-secondary-gray: 0 0% 98%;
    --clr-primary-black: 0 0% 0%;
    --clr-secondary-black: #101010;
    font-family: "Manrope", sans-serif;
  }
body{
    min-height: 100vh;
    line-height: 1.5;
}
`;
export default GlobalStyles;
