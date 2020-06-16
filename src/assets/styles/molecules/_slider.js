import styled from 'styled-components';
import { ButtonNormalStyled } from '../atoms/_buttons';
import { $COLOR_BLACK } from '../_variables';

const SliderContainerStyled = styled.div `
position: relative;
width:${({width})=>width||'100vw'};
height:${({height})=>height||'100vh'};
background:yellow;
display:flex;
flex-direction:row;
align-items:center;
overflow:hidden;
`

const Slide = styled.div `
min-width:100%;
height:100%;
background:blue;
transition:transform 1s ease-in-out;
img{
    width:100%;
    height:100%;
    object-fit:cover;
}
`

const ButtonSlider = styled(ButtonNormalStyled)
`
padding:0;
width:40px;
height:40px;
position: absolute;
display:flex;
justify-content:center;
align-items:center;
top:calc(50% - 20px);
${({left})=>left?'left:.7rem;':null}
${({right})=>right?'right:.7rem;':null}
border-radius:50%;
transition:background-color ease 1s;
&:hover{
    background-color:${$COLOR_BLACK};
}
`


export {
    SliderContainerStyled,
    Slide,
    ButtonSlider
}