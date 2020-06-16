import React from 'react';
import { Fragment } from 'react';
import { SearchStyled,InputSearch } from '../../assets/styles/molecules/_search';
import { ButtonStyled } from '../../assets/styles/atoms/_buttons';
import { useForm } from 'react-hook-form';

const SearchComponent=()=>{
    const {register,handleSubmit}=useForm();
    //falta una que otra validación
    const onSubmit=(data)=>{
        console.log(data);
    }

    return(
        <Fragment>
            <SearchStyled onSubmit={handleSubmit(onSubmit)}>
               <InputSearch type="text" name="search" ref={register} placeholder="Buscar..."/>
               <ButtonStyled><i className="fas fa-search"></i></ButtonStyled>
            </SearchStyled> 
        </Fragment>
    )
}

export default SearchComponent;