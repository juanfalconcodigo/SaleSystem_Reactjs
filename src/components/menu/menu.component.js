import React, { Fragment ,useState} from 'react';
import {HamburgerComponent,SearchComponent} from '../';
import { MenuContainerStyled, MenuStyled, HamburgerStyled,LinkStyled,Search,Menu,Empty,Description } from '../../assets/styles/organism/_menu';
import { withRouter } from 'react-router-dom';


const MenuComponent=({match:{path},history})=>{
    const [show, setShow] = useState(false);
    const handleChangeShow=(value)=>{
        setShow(value);
    }

    const handleLogout=()=>{
        history.push('/login');
        localStorage.removeItem('token');
    }

    return(
        <Fragment>
            <MenuContainerStyled>
                <HamburgerStyled>
                    <HamburgerComponent show={show} handleChangeShow={handleChangeShow}/>
                </HamburgerStyled>  
                <MenuStyled show={show}>
                    <nav>
                        <Search>
                           <SearchComponent/>
                        </Search>
                        
                       <Menu>
                            <LinkStyled to={`${path}`}>Inicio</LinkStyled>
                            <LinkStyled to={`${path}/product`}>Productos</LinkStyled>
                            <LinkStyled to={`${path}/sale`}>Ventas</LinkStyled>
                            <span onClick={handleLogout}>Logout</span>
                       </Menu>
                       <Empty>
                           {/* <p>Provando</p> */}
                       </Empty>
                       <Description>
                           <p>Avenida las Flores 445 S.T.María Chosica</p>
                           <p>+51 967 933 167</p>
                           <p> &copy;Juan Falcón</p>
                       </Description>

                    </nav>
                </MenuStyled>
            </MenuContainerStyled>
        </Fragment>
    )
}

export default withRouter(MenuComponent);