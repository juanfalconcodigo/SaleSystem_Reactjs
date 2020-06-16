import React,{Fragment,useState} from 'react';
import { SliderContainerStyled,Slide,ButtonSlider } from '../../assets/styles/molecules/_slider';
import { useEffect } from 'react';

const SliderComponent=({width,height})=>{
    const [x,setX]=useState(0);
    const [array,setArray]=useState([{
        photo:'https://www.cvn.com.co/wp-content/uploads/2019/06/Ferreter%C3%ADa-industrial.jpg'
    },{
        photo:'https://amsay.cl/wp-content/uploads/2019/09/insumosferreteros.jpg'
    },{
        photo:'https://www.ferreterosonline.com/wp-content/uploads/2017/09/10-must-have-tools-every-homeowner-needs-featured.jpg'
    }
     ]);

    const goLeft=()=>{
        (x===0)?setX(-(array.length-1)*100):setX(x+100);
    }

    const goRight=()=>{
        (x===-(array.length-1)*100)?setX(0):setX(x-100);
    }

    const over=()=>{
       clearTimeout(interval);
       console.log('entro');
    }

    const out=()=>{
        handleInterval();
        console.log('salio')
    }
    let interval;
    const handleInterval=()=>{
        interval=setTimeout(()=>{
            automaticSlider();
        },5000);
    }
    
    useEffect(()=>{
        handleInterval();
        console.log('entro al ver el cambio de x')
        return ()=>{
            clearTimeout(interval);
        }

    },[x]);

    const automaticSlider=()=>{
        (x===-(array.length-1)*100)?setX(0):setX(x-100);
    }
    return (
        <Fragment>
           <SliderContainerStyled  onMouseOver={over} onMouseOut={out} width={width} height={height}>
                  {array.map((e,i)=>(
                      <Slide key={i} style={{transform:`translateX(${x}%)`}}>
                       <img src={e.photo} alt="Img referential"/>
                      </Slide>
                  ))}
               <ButtonSlider color="rgba(34,34,34,0.5)" left onClick={goLeft}><i className="fas fa-chevron-left fa-2x"></i></ButtonSlider>
               <ButtonSlider color="rgba(34,34,34,0.5)" right onClick={goRight}><i className="fas fa-chevron-right fa-2x"></i></ButtonSlider>
           </SliderContainerStyled>
        </Fragment>
    )
}

export default SliderComponent;