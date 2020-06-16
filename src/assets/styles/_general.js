import styled, { createGlobalStyle } from 'styled-components';
import { $CONTAINER_MAX_WIDTH, $CONTAINER_WIDTH_VW, $CONTAINER_MARGIN, $FONT_FAMILY, $COLOR_SCROLLBAR } from './_variables';
import { LatoRegularTtf, MontserratBoldTth } from './fonts/';

const GlobalStyled = createGlobalStyle `
/* @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap'); */
@font-face {
  font-family:'Lato';
  src: url(${LatoRegularTtf}) format('truetype');
  font-style: normal;
}

@font-face {
  font-family:'Montserrat';
  src: url(${MontserratBoldTth}) format('truetype');
  font-style: normal;
}

*{
margin:0px;
padding:0px;
box-sizing:border-box;
font-family:${$FONT_FAMILY};
}
::-webkit-scrollbar {
    width: 8px;     /* Tamaño del scroll en vertical */
    height: 8px;    /* Tamaño del scroll en horizontal */
   /*  display: none; */  /* Ocultar scroll */
}
/* Ponemos un color de fondo y redondeamos las esquinas del thumb */
::-webkit-scrollbar-thumb {
    background: ${$COLOR_SCROLLBAR};
    border-radius: 4px;
}

/* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}

/* Cambiamos el fondo cuando esté en active */
::-webkit-scrollbar-thumb:active {
    background-color: #999999;
}
/* Ponemos un color de fondo y redondeamos las esquinas del track */
.container::-webkit-scrollbar-track {
    background: #e1e1e1;
    border-radius: 4px;
}

/* Cambiamos el fondo cuando esté en active o hover */
.container::-webkit-scrollbar-track:hover,
.container::-webkit-scrollbar-track:active {
  background: #d4d4d4;
}
`

const ContainerStyled = styled.div `
max-width:${$CONTAINER_MAX_WIDTH};
width:${$CONTAINER_WIDTH_VW};
margin:${$CONTAINER_MARGIN};
`

export {
    ContainerStyled,
    GlobalStyled
}