import React,{Fragment,useEffect,useContext} from 'react';
import {useForm} from 'react-hook-form';
import { PopUpStyled ,PopUpContentStyled,PopUpButtonCloseStyled} from '../../assets/styles/molecules/_popup';
import { ButtonStyled } from '../../assets/styles/atoms/_buttons';
import {$COLOR_SECONDARY} from '../../assets/styles/_variables';
import { UserContext } from '../../hooks';

const PopupComponent=({show,data:{name,email},changeShow,changeData})=>{
    const{register,errors,handleSubmit,setValue }=useForm();
    const context = useContext(UserContext);
    const onsubmit=(data)=>{
        console.log(data);
        changeData(data);
    }
    const closePopup=()=>{

        changeShow();
    }

    useEffect(()=>{
        console.log(context)
        setValue("name",name);
        setValue("email",email);
        console.log(show,name,email)
        return ()=>{
        }
    },[name,email])

    
    return(
        <Fragment>
            {/* <p>{name} - {email}</p> */}
            <PopUpStyled show={show}>
                <PopUpContentStyled onSubmit={handleSubmit(onsubmit)}>
                    <input type="text" name="name" defaultValue={name} ref={register({required:{message:"El nombre es necesario",value:true}})}/>
                    <input type="email" name="email" defaultValue={email} ref={register({required:{message:"El email es necesario",value:true},pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:'No es correo válido !!!'}})}/>
                    <ButtonStyled color={$COLOR_SECONDARY}>
                      Update
                    </ButtonStyled>
                </PopUpContentStyled>
                <PopUpButtonCloseStyled onClick={closePopup}>X</PopUpButtonCloseStyled>
            </PopUpStyled>
        </Fragment>
    )
}

export default PopupComponent;