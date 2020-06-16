import styled, { keyframes } from 'styled-components';

const animateNotification = keyframes `
0%{
    transform:translateX(200px);
}


100%{
    transform:translateX(0px);
}
`
const animateCloseNotification = keyframes `
0%{
    transform:translateX(0px);
}

100%{
    transform:translateX(300px);
}
`

const NotificationContainer = styled.div `
position:fixed;
top:10px;
right:10px;
padding:.5rem;
z-index:995;
background: linear-gradient(to right, #eb3349, #f45c43);
color:white;
min-width:250px;
min-height:90px;
transition:box-shadow 1s ease-in-out;
border:6px double white;
&:hover{
    box-shadow: 4px 10px 10px 0px rgba(0,0,0,0.3);
}
display:grid;
grid-template-areas:'icon message';
grid-template-columns:30px auto;
grid-template-rows:auto;
align-items:center;
justify-items:center;
&.show{
    animation:${animateNotification} .3s ease-out;
}
&.close{
    animation:${animateCloseNotification} .3s ease-out; 
    animation-fill-mode:forwards;
}
`
const Icon = styled.div `
grid-area:icon;
`

const Message = styled.div `
grid-area:message;
div{
    display:flex;
    justify-content:space-between;
}
h3{
    font-size:1rem;
}
p{
    font-size:1rem;
}
`

export {
    NotificationContainer,
    Icon,
    Message
}