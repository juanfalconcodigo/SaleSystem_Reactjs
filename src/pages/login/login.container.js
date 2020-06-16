import React, { Fragment } from 'react';
import {useForm} from 'react-hook-form';
import { ButtonStyled,ButtonFixedStyled } from '../../assets/styles/atoms/_buttons';
import { AlertStyled } from '../../assets/styles/atoms/_alert';
import { LoginContainerStyled,InputLoginStyled,ContainerStyled,ImgContainer,InputContainerStyled,IconInput,FormContainer } from '../../assets/styles/pages/login/_login';
import image1 from '../../assets/images/undraw_login.svg';
import image2 from '../../assets/images/undraw_mobile_login.svg';
import { login } from './store/actions';
import Swal from 'sweetalert2';


const LoginContainer=(props)=>{

    const {register,handleSubmit,errors}=useForm();

    const onsubmit=(data)=>{
        console.log(data);
        login(data).subscribe((resp)=>{
          console.log(resp.data)
          localStorage.setItem('token',resp.data.token);
          resp.data.ok&&props.history.push('/home');
        },
        (err)=>{
          console.log(err.response.data,err.response.status);
          Swal.fire({
            title: 'Failed!',
            text: `${err.response.data.err.message}`,
            icon: 'error',
            confirmButtonText: 'Aceptar',
            allowOutsideClick:false
          });
        });
    }
    
    return(
        <Fragment>
            <ButtonFixedStyled to="/register" size="55px"><i className="fas fa-arrow-circle-right fa-2x"></i></ButtonFixedStyled>
            <LoginContainerStyled>
                <ContainerStyled>

                
              <FormContainer onSubmit={handleSubmit(onsubmit)}>
                  <h2>Login :</h2>
                  <InputContainerStyled>
                    <div>
                       <IconInput className="fas fa-envelope-open-text"></IconInput>
                       <InputLoginStyled type="email" placeholder="Ingrese su email ✍️" name="email"  ref={register({required:'El correo es necesario !!!',
                        pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:'No es correo válido !!!'}})}/>
                    </div>
                    {errors.email&&<AlertStyled color="transparent">{errors.email.message}</AlertStyled>}
                  </InputContainerStyled>
                  <InputContainerStyled>
                    <div>
                      <IconInput className="fas fa-key"></IconInput>
                      <InputLoginStyled type="password" name="password" placeholder="Ingrese su contraseña 🔐" ref={register({required:'La contraseña es necesaria !!!',
                      minLength:{value:6,message:'Mínimo son 6 carácteres !!!'}})}/>
                    </div>
                    {errors.password&&<AlertStyled color="transparent">{errors.password.message}</AlertStyled>}
                  </InputContainerStyled>
                <ButtonStyled color="transparent" border sizeBorder="4px" typeBorder="double">
                    Login
                </ButtonStyled>
              </FormContainer>
              <ImgContainer>
                <div>
                    <img src={image1} alt="login img"/>
                    <img src={image2} alt="login img"/>
                </div>      
              </ImgContainer>
              </ContainerStyled>
              </LoginContainerStyled>
        </Fragment>
    )

    
}

export default LoginContainer;