import React, { useState,Fragment,useEffect } from 'react';
import {useForm} from 'react-hook-form';
import { RegisterContainerStyled,ImgContainer,FormContainer,InputForm,FormInputGroup,ContainerStyled,IconInput} from '../../assets/styles/pages/register/_register';
import image from '../../assets/images/undraw_add_tasks.svg';
import { ButtonStyled, ButtonFixedStyled } from '../../assets/styles/atoms/_buttons';
import { AlertStyled } from '../../assets/styles/atoms/_alert';
import { createUser } from './store/actions';
import Swal from 'sweetalert2';


const RegisterContainer=()=>{
    const {register,errors,handleSubmit,formState:{isValid},reset }=useForm();
    const [animation, setAnimation] = useState(false);

    const moveImg=()=>{
        setAnimation(true);
        animate();
    }

    const animate=()=>setTimeout(()=>{
        setAnimation(false);
    },600);

    const onSubmit=(data,e)=>{
        console.log(data);
        /* e.target.reset(); */
        createUser(data).subscribe((resp)=>{
          console.log(resp.data);
          reset();

          Swal.fire({
            title: 'Success!',
            text: 'Se ha registrado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            allowOutsideClick:false
          });
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
    useEffect(()=>{
        return ()=>{
            clearTimeout(animate);
        }

    },[])

    return(
        <Fragment>
            <ButtonFixedStyled to="/login" size="55px"><i className="fas fa-arrow-circle-left fa-2x"></i></ButtonFixedStyled>
            <RegisterContainerStyled valid={isValid}>
            <ContainerStyled>

                <ImgContainer move={animation}>
                   <img src={image} alt="Images register"/>    
                </ImgContainer>
                <FormContainer onSubmit={handleSubmit(onSubmit)}>
                    <h2>Registro de usuario :</h2>
                    <FormInputGroup>
                       <label htmlFor="name">Ingrese su nombre :</label>
                       <div>
                         <IconInput className="fas fa-user-shield"></IconInput>
                         <InputForm  id="name" type="text" name="name" ref={register({required:{message:'El nombre es necesario',value:true}})} onChange={moveImg}/>
                       </div>
                       {errors.name&&<AlertStyled color="transparent">{errors.name.message}</AlertStyled>}
                    </FormInputGroup>


                    <FormInputGroup>
                    <label htmlFor="lastName">Ingrese su apellido :</label>
                    <div>
                      <IconInput className="fas fa-users"></IconInput>
                      <InputForm  id="lastName" type="text" name="lastName" ref={register({required:{message:'El apellido es necesario',value:true}})} onChange={moveImg}/>
                    </div>
                    {errors.lastName&&<AlertStyled color="transparent">{errors.lastName.message}</AlertStyled>}
                    </FormInputGroup>

                    <FormInputGroup>
                      <label htmlFor="phone">Ingrese su celular :</label>
                      <div>
                          <IconInput className="fas fa-mobile-alt"></IconInput>
                          <InputForm  id="phone" type="text" name="phone" ref={register({required:{message:'El celular es necesario',value:true}})} onChange={moveImg}/>
                      </div>
                      {errors.phone&&<AlertStyled color="transparent">{errors.phone.message}</AlertStyled>}
                    </FormInputGroup>


                    <FormInputGroup>
                      <label htmlFor="email">Ingrese su correo :</label>
                      <div>
                        <IconInput className="fas fa-envelope-open-text"></IconInput>
                        <InputForm  id="email" type="email" name="email" ref={register({required:{message:'El correo es necesario',value:true},pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:'No es correo válido !!!'}})} onChange={moveImg}/>
                      </div>
                      {errors.email&&<AlertStyled color="transparent">{errors.email.message}</AlertStyled>}
                    </FormInputGroup>

                    <FormInputGroup>
                      <label htmlFor="userName">Ingrese su usuario :</label>
                      <div>
                          <IconInput className="far fa-user"></IconInput>
                          <InputForm  id="userName" type="text" name="userName" ref={register({required:{message:'El usuario es necesario',value:true}})} onChange={moveImg}/>
                      </div>
                      {errors.userName&&<AlertStyled color="transparent">{errors.userName.message}</AlertStyled>}
                    </FormInputGroup>
                    
                    <FormInputGroup>
                      <label htmlFor="password">Ingrese su contraseña :</label>
                      <div>
                         <IconInput className="fas fa-user-secret"></IconInput>
                         <InputForm id="password" type="password" name="password" ref={register({required:{message:'La contraseña es necesaria',value:true}})} onChange={moveImg}/>
                      </div>
                      {errors.password&&<AlertStyled color="transparent">{errors.password.message}</AlertStyled>}
                    </FormInputGroup>
                    
                    <ButtonStyled radius="10px" style={{marginTop:'10px',display:'block'}} border color="transparent" typeBorder="double" sizeBorder="4px">Register</ButtonStyled>
                    
                </FormContainer>
                </ContainerStyled>
            </RegisterContainerStyled>
        </Fragment>
    )
}

export default RegisterContainer;