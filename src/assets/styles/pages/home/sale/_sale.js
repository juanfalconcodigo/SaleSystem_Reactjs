import styled from 'styled-components';
import { $COLOR_ALICE_BLUE, $COLOR_PRIMARY, $DEVICE_SPECIAL_SALE, $MOVILE } from '../../../_variables';
import { animateHoverTable } from '../../../tools/mixins/_mixin';


const SaleContainerStyled = styled.div `
padding:20px;
display:flex;
justify-content:center;
align-items:center;
/* no usar 100vw */
width:100%;
min-height:100vh;
background:${$COLOR_ALICE_BLUE};
`


const SaleContent = styled.div `
display:grid;
min-width:850px;
min-height:80vh;
grid-template-areas:"client client" "product table";
grid-template-columns:1.5fr 3fr;
grid-template-rows:150px auto;
grid-gap:15px;
transition:box-shadow .5s ease-in-out;
@media (max-width:${$DEVICE_SPECIAL_SALE}) {
    width:80%;
    min-width:300px;
    grid-template-areas:"client" "product" "table";
    grid-template-columns:1fr;
    grid-template-rows:140px auto auto;
}
&:hover{
    box-shadow: 7px 18px 19px 0px rgba(0,0,0,0.75);
}
`


const ClientContent = styled.div `
background:white;
grid-area:client;
display:flex;
justify-content:space-around;
align-items:center;
@media (max-width:${$MOVILE}) {
    flex-direction:column;
}
`


const ProductContent = styled.form.attrs((props) => ({
    autoComplete: 'off',
    noValidate: true,
}))
`
padding:15px;
background:white;
grid-area:product;
display:grid;
grid-template-columns:1fr;
grid-template-rows:1fr 1fr 1fr 1fr;
`




const TableContent = styled.div `
padding:10px;
background:white;
grid-area:table;
display:flex;
@media (max-width:${$DEVICE_SPECIAL_SALE}) {
       overflow-x: auto;
}
`


const SectionGroup = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
`


const SelectStyled = styled.select `
outline:none;
padding:5px;
border:1px ${$COLOR_PRIMARY} solid;
border-radius:5px;
`


const InputStyled = styled.input `
outline:none;
padding:5px;
border:1px ${$COLOR_PRIMARY} solid;
border-radius:5px;
`


/*--Table--*/
const TableSaleStyled = styled.div `
width:100%;
min-height:100%;
display:grid;
grid-template-areas:'header' 'body' 'footer';
grid-template-rows:50px auto 50px;
`


const TableHeader = styled.div `
grid-area:header;
display:grid;
grid-template-columns:repeat(5,1fr);
border-bottom:1px thistle solid; 
justify-items:center;
align-items:center;
`


const TableBody = styled.div `
grid-area:body;
padding:5px;
display:grid;
align-content:space-between;
`


const TRow = styled.div `
display:grid;
grid-template-columns:repeat(5,1fr);
justify-items:center;
align-items:center;
& span{
    padding:5px;
}
&:hover{
    animation:${animateHoverTable} ease-in-out 2s infinite;
}
`


const TableFooter = styled.div `
grid-area:footer;
display:flex;
justify-content:flex-end;
align-items:center;
`



export {
    SaleContainerStyled,
    SaleContent,
    ClientContent,
    ProductContent,
    SectionGroup,
    TableContent,
    SelectStyled,
    InputStyled,
    TableSaleStyled,
    TableHeader,
    TableBody,
    TableFooter,
    TRow
}