import styled from 'styled-components';
import { animateImg, animateChangeBackgroundColor, animateRotateImg } from '../../tools/mixins/_mixin';
import { $TABLET, $COLOR_WHITE, $CONTAINER_HEIGHT_VH, $CONTAINER_WIDTH_VW, $CONTAINER_WIDTH_LOGIN_REGISTER, $COLOR_TRANSPARENT } from '../../_variables';


const RegisterContainerStyled = styled.div `
padding:1rem;
display:flex;
justify-content:center;
align-items:center;
width:${$CONTAINER_WIDTH_VW};
min-height:${$CONTAINER_HEIGHT_VH};
background: #4776E6;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #8E54E9, #4776E6);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #8E54E9, #4776E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background-size:400%;
animation:${animateChangeBackgroundColor} 20s ease-in-out infinite alternate both;
/* background:${(props)=>props.valid?'linear-gradient(to right, #834d9b, #d04ed6)':'#ee6562'} ; */
`



const ContainerStyled = styled.div `
max-width:${$CONTAINER_WIDTH_LOGIN_REGISTER};
display:grid;
grid-template-areas:"img form";
grid-template-columns:1fr 1fr;
grid-template-rows:auto;
grid-gap:10px;
@media (max-width:${$TABLET}){
  grid-template-areas:'img' 'form';
  grid-template-columns:1fr;
  max-width:400px;
}
`



const ImgContainer = styled.div `
grid-area:img;
display:flex;
justify-content:center;
align-items:center;
& img{
    width:85%;
    /* animation:${(props)=>props.move?animateImg:null} ease-in-out .6s,${animateRotateImg} ease-in-out 10s infinite alternate both; */
    animation:${animateRotateImg} ease-in-out 10s infinite alternate both;
    animation-fill-mode:forwards;
    backface-visibility:hidden;
    @media(max-width:${$TABLET}) {
        padding:1rem;
        width:85%;
    }
}
`



const FormContainer = styled.form.attrs((props) => ({
    noValidate: true,
    autoComplete: 'off'
}))
`
grid-area:form;
display:flex;
flex-direction:column;
padding:1rem;
h2{
    color:${$COLOR_WHITE};
    text-align:center;
    margin-bottom:10px;
}
`


const FormInputGroup = styled.div `
margin-bottom:10px;
label{
    color:${$COLOR_WHITE};
}
div{
    display:grid;
    grid-template-areas:'icon input';
    grid-template-columns:20px auto;
    grid-template-rows:auto;
}
`


const IconInput = styled.i `
grid-area:icon;
color:${$COLOR_WHITE};
display:flex;
justify-content:center;
align-items:center;
width:20px;
border-bottom: 2px solid ${$COLOR_WHITE};
`


const InputForm = styled.input `
/* tener en cuenta el padding del input pasa que malogra el responsive */
cursor: pointer;
grid-area:input;
padding:.6rem;
font-size:1rem;
outline:none;
border:none;
color:${$COLOR_WHITE};
background:${$COLOR_TRANSPARENT};
border-bottom: 2px solid ${$COLOR_WHITE};
`


export {
    RegisterContainerStyled,
    ImgContainer,
    FormContainer,
    FormInputGroup,
    InputForm,
    ContainerStyled,
    IconInput
}