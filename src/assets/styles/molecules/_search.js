import styled from 'styled-components';
import { $COLOR_WHITE, $COLOR_GRIS } from '../_variables';

const SearchStyled = styled.form.attrs((props) => ({
    autoComplete: 'off',
    noValidate: false
}))
`
display:flex;
width:200px;
max-width:200px;
`

const InputSearch = styled.input `
border:none;
outline:none;
padding:.6rem;
color:${$COLOR_WHITE};
background-color:${$COLOR_GRIS};
flex:auto;
`

export {
    SearchStyled,
    InputSearch
}