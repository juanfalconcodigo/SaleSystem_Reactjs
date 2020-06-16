import styled from 'styled-components';
import { $COLOR_DANGER } from '../_variables';
import { animateAlertX } from '../tools/mixins/_mixin';

const AlertStyled = styled.span `
display:block;
padding:.5rem;
background:${(props)=>props.color||$COLOR_DANGER};
color:#fff;
animation:${({colorOne, colorTwo, colorThree,distance})=>animateAlertX(colorOne, colorTwo, colorThree,distance)} .8s ease;
`;


export {
    AlertStyled,
}