import React, { Fragment,useState } from 'react';
import {useForm} from 'react-hook-form';
import { ProductContainerStyled,ProductContent,ContainerForm,ContainerImg,FormInputGroup,InputForm,SelectForm } from '../../../assets/styles/pages/home/product/_product';
import { ButtonStyled } from '../../../assets/styles/atoms/_buttons';
import { AlertStyled } from '../../../assets/styles/atoms/_alert';
import * as yup from 'yup';
import { createProduct } from './store/actions';
import Swal from 'sweetalert2'

const schemaProduct=yup.object().shape({
    category:yup.string().required("La categoría es necesaria"),
    name:yup.string().required("El nombre es necesario"),
    photo:yup.mixed().required("La foto es requerida"),
    price:yup.string().required("El precio es necesario").matches(/^(?!^0\.00$)(([1-9][\d]{0,6})|([0]))\.[\d]{2}$/,{
        message:'Formato incorrecto',
        excludeEmptyString: true
    }),
    quantity:yup.number().typeError('La cantidad es un numero').required("La cantidad es necesaria").integer().positive("Número entero positivo").min(1,"Minimo 1 producto")
});

const ProductComponent =()=>{
    const {register,errors,handleSubmit,watch,reset} = useForm({validationSchema:schemaProduct});
    const [img,setImage]=useState("https://cdn.onlinewebfonts.com/svg/img_546302.png");
    const submit=(data)=>{
        if(!data.photo[0]){
            return;
        }
        console.log({...data,photo:data.photo[0]});
        createProduct({...data,photo:data.photo[0]}).subscribe((resp)=>{
            Swal.fire({
                title: 'Success!',
                text: 'Se ha registrado correctamente el producto',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                allowOutsideClick:false
              });
            console.log(resp.data);
            reset();
            setImage("https://cdn.onlinewebfonts.com/svg/img_546302.png")
        },(err)=>{
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

    const handleChange=(e)=>{
        /* console.log(e.target.files[0]) */
        /* setValue('photo',e.target.files[0]); */
        (e.target.files[0])?setImage(URL.createObjectURL(e.target.files[0])):setImage("https://cdn.onlinewebfonts.com/svg/img_546302.png");
        
    }

    return (
        <Fragment>
            <ProductContainerStyled>
            <ProductContent>
                <ContainerForm onSubmit={handleSubmit(submit)}>
                    <FormInputGroup>
                        <label htmlFor="name">Ingrese nombre de producto :</label>
                        <InputForm  id="name"type="text" name="name" ref={register}/>
                        {errors.name&&<AlertStyled>{errors.name.message}</AlertStyled>}
                    </FormInputGroup>

                    
                    <FormInputGroup>
                        <label htmlFor="price">Ingrese precio del producto :</label>
                        <InputForm  id="price" type="text" name="price" ref={register}/>
                        {errors.price&&<AlertStyled>{errors.price.message}</AlertStyled>}
                    </FormInputGroup>


                    <FormInputGroup>
                        <label htmlFor="category">Seleccione su categoría</label>
                        <SelectForm id="category" name="category" ref={register}>
                        <option value="construcción">Construcción</option>
                        <option value="madera">Madera</option>
                        <option value="electricidad">Electricidad</option>
                        <option value="fontanería">Baño y fontanería</option>
                        <option value="jardin">Jardín</option>
                        </SelectForm>
                    {errors.category&&<AlertStyled>{errors.category.message}</AlertStyled>}
                    </FormInputGroup>


                    <FormInputGroup>
                        <label htmlFor="quantity">Ingrese cantidad :</label>
                        <InputForm type="number" step="1" name="quantity" min="1" id="quantity"  ref={register}/>
                        {errors.quantity&&<AlertStyled>{errors.quantity.message}</AlertStyled>}
                    </FormInputGroup>
                    
                    
                    
                    {/* <FormInputGroup>
                        <InputForm onChange={handleChange} type="file" name="photo" ref={register({required:{
                          value:true,
                          message:'La foto necesaria'
                        }})}/>
                        {errors.photo&&<AlertStyled>{errors.photo.message}</AlertStyled>}
                    </FormInputGroup> */}
                    <FormInputGroup>
                        <InputForm onChange={handleChange} type="file" name="photo" ref={register}/>
                        {(watch('photo')?.length===0)&&<AlertStyled>{"La imagen es necesaria"}</AlertStyled>}
                    </FormInputGroup>
                   
                    <ButtonStyled>Register</ButtonStyled>
                   
                
                </ContainerForm>
                <ContainerImg>
                    <img src={img} alt="Imagen producto"/>
                </ContainerImg>
            </ProductContent>
            </ProductContainerStyled>
        </Fragment>
    )
}

export default ProductComponent;