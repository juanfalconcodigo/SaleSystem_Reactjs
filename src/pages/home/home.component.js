import React,{Fragment} from 'react';
import {SliderComponent} from '../../components';
import { HomeContainerStyled,InfoOneStyled,InfoTwoStyled,InfoThreeStyled } from '../../assets/styles/pages/home/_home';


const HomeComponent=()=>{
    return(
        <Fragment>
            <SliderComponent width={'100%'} height={'100vh'}/>
            <HomeContainerStyled>
                <InfoOneStyled>
                    <img src="https://previews.123rf.com/images/langstrup/langstrup1609/langstrup160900221/63176186-manitas-joven-que-presenta-en-una-ferreter%C3%ADa-de-pie-sonriendo-a-la-c%C3%A1mara-en-el-pasillo-entre-bastidores.jpg" alt=""/>
                    <div>
                         <h3>Productos</h3>
                         <i className="fas fa-crown fa-3x" style={{color:'white'}}></i>
                         <p>Mejores productos del mercado</p>
                    </div>
                </InfoOneStyled>

                <InfoTwoStyled>
                    <img src="https://metalplast.com.pe/wp-content/uploads/2018/03/nuslider_5.jpg" alt=""/>
                    <div>
                    <h3>Vanguardia</h3>
                    <i className="fas fa-laptop-house fa-3x" style={{color:'white'}}></i>
                    <p>Estamos a la vanguardia</p>
                    </div>
                </InfoTwoStyled>

                <InfoThreeStyled>
                    <img src="https://develop.com/wp-content/uploads/2020/04/Screen-Shot-2020-04-24-at-2.50.29-PM.png" alt=""/>
                    
                    {/* <div>
                      <h3>Git-Hub</h3>
                      <p>Esto es una demo del producto final</p>
                    </div> */}
                    
                </InfoThreeStyled>
            </HomeContainerStyled>
        </Fragment>
    )
}

export default HomeComponent;
