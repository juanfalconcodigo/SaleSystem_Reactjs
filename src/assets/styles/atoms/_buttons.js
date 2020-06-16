import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { $COLOR_PRIMARY, $TABLET } from "../_variables";

const BorderStyled = css `
border:${({sizeBorder})=>sizeBorder||'2px'} ${({typeBorder})=>typeBorder||'solid'} ${({colorBorder})=>colorBorder||'#fff'};
`

const ButtonStyled = styled.button.attrs((props) => ({
    type: 'submit'
}))
`
padding:.8rem;
background-color:${(props)=>props.color||$COLOR_PRIMARY};
border:none;
color:${(props)=>props.color_text||'#fff'};
cursor:pointer;
font-size:1rem;
border-radius:${(props)=>props.radius||'none'};
${(props)=>props.border&&BorderStyled};
outline:none;
`

const ButtonFixedStyled = styled(NavLink).attrs((props) => ({
    to: `${props.to}`
}))
`
display:flex;
justify-content:center;
align-items:center;
position:fixed;
top:1rem;
right:1rem;
text-decoration:none;
width:${(props)=>props.size||'55px'};
height:${(props)=>props.size||'55px'};
border-radius:50%;
background-color:#E6ECE9;
transition:background-color .5s ease-in-out;
&:hover{
    background-color:#C5CECA;
}

@media (max-width:${$TABLET}){
width:40px;
height:40px; 
}
`

const ButtonNormalStyled = styled.button `
background-color:${(props)=>props.color||$COLOR_PRIMARY};
color:${(props)=>props.textColor||"#fff"};
border:none;
padding:.8rem;
outline:none;
cursor:pointer;
`

export {
    ButtonStyled,
    ButtonFixedStyled,
    ButtonNormalStyled
}