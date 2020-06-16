import styled from 'styled-components';
import { $TABLET } from '../../_variables';

const HomeContainerStyled = styled.main `
width:100%;
height:100vh;
display:grid;
grid-template-areas:'one two' 'three three';
grid-template-columns:1fr 1fr;
grid-template-rows:50% 50%;
@media (max-width:${$TABLET}) {
    grid-template-areas:'two' 'one' 'three';
    grid-template-columns:1fr;
    grid-template-rows:auto;
    grid-gap:1rem;
    padding:1rem;
}
`

const Info = styled.article `
cursor: pointer;
position: relative;
grid-area:one;
background:#869FA8;
overflow:hidden;
div{
    position:absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    h3,p{
    color:white;
    font-size:1.5rem;
    font-weight:700;
    text-align:center;
    }
}

img{
    width:100%;
    height:100%;
    object-fit:cover;
    vertical-align:bottom;
    transition:transform ease-in-out 1s;
}
&:hover img{
    transform:scale(1.5);
}
`


const InfoOneStyled = styled(Info)
`
grid-area:one;
`




const InfoTwoStyled = styled(Info)
`
grid-area:two;
background-color:#040404;
`



const InfoThreeStyled = styled(Info)
`
grid-area:three;
background-color:#9BA5B6;
&:hover img{
    transform:scale(1);
}
`



export {
    HomeContainerStyled,
    InfoOneStyled,
    InfoTwoStyled,
    InfoThreeStyled
}