import styled from 'styled-components';

const PopUpStyled = styled.div `
position:fixed;
top:0;
left:0;
width:100%;
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:rgba(0,0,0,.5);
transition:transform .3s ease-in-out;
transform:${({show})=>show?'scale(1)':'scale(0)'}
`
const PopUpContentStyled = styled.form.attrs((props) => ({
    autoComplete: 'off',
    noValidate: true
}))
`
position:relative;
padding:1rem;
min-width:50vw;
display:grid;
grid-template-columns:1fr;
background:white;
grid-gap:10px;
`

const PopUpButtonCloseStyled = styled.button.attrs((props) => ({}))
`
position:absolute;
top:5px;
right:5px;
`

export {
    PopUpStyled,
    PopUpContentStyled,
    PopUpButtonCloseStyled
}