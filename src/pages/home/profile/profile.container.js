import React,{Fragment,useState,useEffect} from 'react';
import {PopupComponent} from '../../../components/';

const ProfileContainer=()=>{
    const [showModal,setShowModal] = useState(false);
    const [data,setData]=useState({name:'Juan',email:'Juan@gmail.com'});
    const [users,setUsers]=useState([]);

    const show=()=>{
        setShowModal(true);
    }
    const showModalUsers=(data)=>{
        if(data){
            setData(data)
            setShowModal(true);
        }
        return;
    }
    const changeShow=()=>{
        setShowModal(false);
    }
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setData({...data,[name]:value})
        console.log(name,value)
    }

    const changeData=(data)=>{
        setData(data);
    }

    useEffect(()=>{
        getUsers()
    },[])

    const getUsers=async ()=>{
        const users=await fetch('https://jsonplaceholder.typicode.com/users');
        const data=await users.json();
        console.log(data)
        setUsers(data);
    }

    return(
        <Fragment>
            <input type="text" name="name" value={data.name} onChange={handleChange} autoComplete="off" />
            <input type="text" name="email" value={data.email} onChange={handleChange} autoComplete="off" />
            <button onClick={show}>Popup</button>
            {/* <PopupComponent show={showModal} data={data} changeShow={changeShow} changeData={changeData}/> */}
            {users.length===0?<span>No hay data</span>:
            users.map((e)=>(
                <ul key={e.id}>
                <li style={{cursor:'pointer'}} onClick={()=>showModalUsers({name:e.name,email:e.email})}>{e.name} - {e.email}</li>
                </ul>
            ))}
            <PopupComponent show={showModal} data={data} changeShow={changeShow} changeData={changeData}/>
            
        </Fragment>
    )
}

export default ProfileContainer;