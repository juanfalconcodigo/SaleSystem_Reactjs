import React, { Fragment,useState } from 'react';
import { NotificationContainer,Icon,Message } from '../../assets/styles/molecules/_notification';

const NotificationComponent=({message,title,type})=>{
    const [close,setClose]=useState(false);
    const handleClose=()=>{
        setClose(true);
    }
    return(
        <Fragment>
            <NotificationContainer className={close?'close':'show'} type={type}>
                <Icon>
                  <i className="fas fa-exclamation-circle fa-lg"></i>
                </Icon>
                <Message>
                    <div>
                       <h3>{title}</h3>
                       <i className="fas fa-times" onClick={handleClose} style={{cursor:'pointer'}}></i>
                    </div>
                    <p>{message}</p>
                </Message>
            </NotificationContainer>
        </Fragment>
    )
}

export default NotificationComponent;