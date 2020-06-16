import { keyframes } from 'styled-components';
import { $COLOR_DANGER, $COLOR_TABLE_FORTE, $COLOR_TABLE_TENUE } from '../../_variables';

const animateAlertX = (colorOne, colorTwo, colorThree, distance) => keyframes `
0%{
    transform:translateX(-${distance||10}px);
    background-color:${colorOne||'#E8755F'};
}

45%{
    transform:translateX(0px);
    background-color:${colorTwo||$COLOR_DANGER};
}

70%{
    transform:translateX(${distance||10}px);
    background-color:${colorThree||'#E85F9C'};
}
`
    /* no lo por ahora nadies */
const animateImg = keyframes `
0%{
    transform:scale(1.1);
}
50%{
    transform:scale(.9);
}
100%{
    transform:scale(1);
}
`
const animateHoverTable = keyframes `
0%{
    background-color:${$COLOR_TABLE_TENUE};
}
50%{
    background-color:${$COLOR_TABLE_FORTE};

}
100%{
    background-color:${$COLOR_TABLE_TENUE};

}
`

const animateChangeBackgroundColor = keyframes `
0%{
    background-position:0% 100%;
}

50%{
    background-position:100% 100%;
}
100%{
    background-position:0% 100%;
}
`



const animateLoginSlider = keyframes `
0% {
        margin-left: 0px;
}
25% {
        margin-left: 0px;
}
45%{
    margin-left:-100%;
}
65%{
    margin-left:-100%;
}
75%{
    margin-left:0%; 
}
100%{
    margin-left:0%; 
}
`

const animateRotateImg = keyframes `
25%{
    transform:perspective(800px) translateY(-30px)  rotateX(20deg);
}
50%{
    transform:perspective(800px) translateY(0) rotateX(30deg) ;
}
75%{
    transform:perspective(800px) translateY(30px) rotateX(40deg) ;
}
100%{
    transform:perspective(700px) translateY(0) rotateX(10deg) ;
}
`

export {
    animateAlertX,
    animateImg,
    animateHoverTable,
    animateChangeBackgroundColor,
    animateLoginSlider,
    animateRotateImg
}