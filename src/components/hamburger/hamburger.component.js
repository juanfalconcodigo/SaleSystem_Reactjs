import React, { Fragment,useState,useEffect } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import { HamburgerContainer } from '../../assets/styles/molecules/_hamburger';
import { $COLOR_PRIMARY } from '../../assets/styles/_variables';


const HamburgerComponent = ({show,handleChangeShow}) => {
    const [isOpen, setOpen] = useState(false);
    //toggled valor inicial y del icono
    //toggle es que hace el cambio
    const handleHamburgerChangeShow=()=>{
        setOpen(!isOpen);
        handleChangeShow(!show);
    }
    useEffect(() => {
        setOpen(show);
        return () => {
            
        }
    }, [show]);
    return(
        <Fragment>
            <HamburgerContainer>
               <Hamburger rounded  size={30} toggled={isOpen} toggle={handleHamburgerChangeShow} color={$COLOR_PRIMARY}/>
            </HamburgerContainer>
        </Fragment>
    )

}

export default HamburgerComponent;