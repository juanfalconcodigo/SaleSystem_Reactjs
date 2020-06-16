import styled from 'styled-components';
import { $TABLET, $CONTAINER_WIDTH_LOGIN_REGISTER, $CONTAINER_HEIGHT_VH, $CONTAINER_WIDTH_VW, $COLOR_WHITE, $COLOR_TRANSPARENT } from '../../_variables';
import { animateChangeBackgroundColor, animateLoginSlider } from '../../tools/mixins/_mixin';



const LoginContainerStyled = styled.div `
display:flex;
justify-content:center;
align-items:center;
width:${$CONTAINER_WIDTH_VW};
min-height:${$CONTAINER_HEIGHT_VH};
background: #8e2de2; /* fallback for old browsers */
background: linear-gradient(to right, #8e2de2, #4a00e0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background-size:400%;
padding:1rem;
animation:${animateChangeBackgroundColor} 20s ease-in-out infinite alternate both;
`
const ContainerStyled = styled.div `
max-width:${$CONTAINER_WIDTH_LOGIN_REGISTER};
display:grid;
grid-template-areas:'image form';
grid-template-columns:1fr 1fr;
grid-template-rows:auto;
grid-gap:1.2rem;
@media (max-width:${$TABLET}) {
    grid-template-areas:'image' 'form';
    grid-template-columns:1fr;
    grid-template-rows:auto;
    max-width:400px;
}
`

const FormContainer = styled.form.attrs((props) => ({
    autoComplete: 'off',
    noValidate: true
}))
`
padding:1rem;
display:flex;
flex-direction:column;
justify-content:center;
h2{
    color:${$COLOR_WHITE};
    text-align:center;
    margin-bottom:10px;
}
`



const ImgContainer = styled.div `
overflow:hidden;
grid-area:image;

div{
width:100%;
height:100%;
display:flex;
align-items:center;
animation:${animateLoginSlider} 20s ease-in-out infinite alternate;
&:hover{
        animation-play-state:paused;
    }
}
img{
    width:100%;
    height:100%;
    object-fit:cover;
    @media (max-width:${$TABLET}) {
        width:100%;
        padding:2rem;
    }
}
`
const InputContainerStyled = styled.div `
margin-bottom:20px;
div{
display:grid;
grid-template-areas:'icon input';
grid-template-columns:20px auto;
grid-template-rows:auto;
}
`
const IconInput = styled.i `
grid-area:icon;
width:20px;
display:flex;
justify-content:center;
align-items:center;
color:${$COLOR_WHITE};
border-bottom: 2px solid ${$COLOR_WHITE};
`

const InputLoginStyled = styled.input `
cursor:pointer;
grid-area:input;
outline:none;
padding:.6rem;
background-color:${$COLOR_TRANSPARENT};
border:none;
color:${$COLOR_WHITE};
font-size:1rem;
border-bottom: 2px solid ${$COLOR_WHITE};
&[placeholder]::-webkit-input-placeholder {
    color:${$COLOR_WHITE};
}
&[placeholder]:focus::-webkit-input-placeholder {
    transition: text-indent 0.5s 0.5s ease; 
    text-indent: -100%;
    opacity: 1;
 }
`

export {
    LoginContainerStyled,
    FormContainer,
    InputContainerStyled,
    IconInput,
    InputLoginStyled,
    ContainerStyled,
    ImgContainer
}