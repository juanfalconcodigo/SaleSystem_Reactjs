import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { $FONT_MONTSERRAT, $COLOR_BLACK, $COLOR_WHITE } from '../_variables';

const MenuContainerStyled = styled.div `
`
const MenuStyled = styled.aside `
position:fixed;
width:100%;
z-index:998;
top:0px;
right:0px;
bottom:0px;
left:0px;
background-color:rgba(34,34,34,0.85);
display:flex;
align-content:center;
transform:${(props)=>props.show?"translate(0,0)":"translate(-100%,0)"};
transition:transform 1s ease-in-out;
nav{
    overflow-y:auto;
    width:250px;
    padding:1.5rem;
    display:grid;
    grid-template-areas:'search' 'menu' 'empty' 'description';
    grid-template-rows:80px 180px auto 200px;
    background-color:${$COLOR_BLACK};
    justify-items:center;
    align-items:center;
}
`

const Search = styled.div `
grid-area:search;
`
const Menu = styled.div `
grid-area:menu;
justify-self:start;
span{
    color:${$COLOR_WHITE};
    font-family:${$FONT_MONTSERRAT};
    font-weight:700;
    line-height:12px;
    padding:.6rem;
    font-size:12px;
    cursor: pointer;
}
`
const Empty = styled.div `
grid-area:empty;
color:${$COLOR_WHITE};
`
const Description = styled.div `
grid-area:description;
width:100%;
height:100%;
color:white;
display:flex;
flex-direction:column;
justify-content:space-around;
`

const LinkStyled = styled(NavLink).attrs((props) => ({
    to: `${props.to}`
}))
`
font-family:${$FONT_MONTSERRAT};
font-weight:700;
line-height:12px;
display:block;
padding:.6rem;
font-size:12px;
text-decoration:none;
color:${$COLOR_WHITE};
`

const HamburgerStyled = styled.div `
position:fixed;
right:1vw;
bottom:1vw;
z-index:999;
`


export {
    MenuContainerStyled,
    HamburgerStyled,
    MenuStyled,
    LinkStyled,
    Search,
    Menu,
    Empty,
    Description
}