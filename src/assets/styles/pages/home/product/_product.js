import styled from 'styled-components';
import { $COLOR_PRIMARY, $COLOR_ALICE_BLUE, $TABLET, $MOVILE } from '../../../_variables';

const ProductContainerStyled = styled.div `
width:100%;
min-height:100vh;
background:${$COLOR_ALICE_BLUE};
display:flex;
justify-content:center;
align-items:center;
padding:1rem;
@media(max-width:${$TABLET}){
    padding:1.3rem;
}
`
const ProductContent = styled.div `
max-width:900px;
min-height:500px;
width:900px;
display:grid;
grid-template-areas:'form img';
grid-template-columns:2fr 1fr;
grid-gap:15px;
transition:box-shadow .5s ease-in-out;
&:hover{
    box-shadow: 7px 18px 19px 0px rgba(0,0,0,0.75);
}
@media (max-width:${$TABLET}){
    grid-template-columns:1fr;
    grid-template-areas:'img' 'form';
    max-width:500px;
}
@media (max-width:${$MOVILE}){
    max-width:300px;
}
`

const ContainerForm = styled.form.attrs((props) => ({
    noValidate: true,
    autoComplete: 'off'
}))
`
width:100%;
padding:1.8rem;
background:white;
grid-area:form;
display:grid;
grid-template-columns:1fr;
grid-gap:10px;
`
const ContainerImg = styled.div `
width:100%;
grid-area:img;
& img{
    width:100%;
    height:100%;
    object-fit:cover;
}
`

const FormInputGroup = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
`


const InputForm = styled.input `
outline:none;
padding:5px;
border:1px ${$COLOR_PRIMARY} solid;
border-radius:5px;
width: 100%;
`
const SelectForm = styled.select `
outline:none;
padding:5px;
border:1px ${$COLOR_PRIMARY} solid;
border-radius:5px;
width: 100%;
`

export {
    ProductContainerStyled,
    ProductContent,
    ContainerForm,
    ContainerImg,
    FormInputGroup,
    InputForm,
    SelectForm
}