import React, { Fragment,useState,useEffect } from 'react';
import {useForm} from 'react-hook-form';
import { SaleContainerStyled,SaleContent,ClientContent,ProductContent,SectionGroup,TableContent,SelectStyled,InputStyled,TableSaleStyled,TableHeader,TableBody,TableFooter, TRow } from '../../../assets/styles/pages/home/sale/_sale';
import { ButtonStyled } from '../../../assets/styles/atoms/_buttons';
import { getClientSubscription,getProductSubscription,postVentaSubscription } from './store/actions';
import * as yup from "yup";
/* import {NotificationComponent} from '../../../components/'; */
import Swal from 'sweetalert2';


const productSchema = yup.object().shape({
    product:yup.string().required(),
    quantity:yup.number("Debe ser un número")
    .required("La cantidad es necesaria")
    .positive()
    .integer()
    .min(1, "Minimo 1 producto"),
    price:yup.number("Debe ser un número")
    .required("El precio es necesario")
    .positive()
    .min(1, "Precio mínimo : 1"),
});




const SaleContainer=()=>{
    const {register,errors,getValues}=useForm();
    const{register:registerTwo,errors:errorsTwo,handleSubmit:handleSubmitTwo,setValue:setValueTwo}=useForm({validationSchema:productSchema});
    const [clients,setClients]=useState([]);
    const [products,setProducts]=useState([]);
    const [totalValue,setTotalValue]=useState(0);
    const [sale,setSale]=useState({product:"",totalValue:0,client:"",products:[]});
   

    /* {
        "totalValue":50,
        "client":"5ed3e6783f091b08f4057537",
        "products":[
        {
            "product":"5ed1c5be5f98132d04016e6e",
            "quantity":2
        },
        {
            "product":"5ed1c421e964f62e987b3ce3",
            "quantity":3
        }]
    } */

    const deleteRow=(i)=>{
        //se resta el subtotal
        const deleteSale=sale.products.splice(i,1);
        const total=totalValue-deleteSale[0].subTotal;
        setSale({...sale,products:sale.products});
        setTotalValue(total);
    }


    const handleProductChange=(e)=>{
        console.log(e.target.value);
        const price=String(e.target.value).split('-')[1];
        setValueTwo('price',price);
        setSale({...sale,product:e.target.value});
    }

    const onSubmitTwo=(resp)=>{
        console.log(resp);
        const {quantity,price}=resp;
        const name=sale.product.split("-")[2];
        const productId=sale.product.split("-")[0];
        const subTotal=parseFloat(Math.round(quantity*price*100)/100);
        const total=totalValue+subTotal;
        const index=sale.products.findIndex((e)=>e.product===productId);
        if(index<0){
            setSale({...sale,products:[...sale.products,{...resp,subTotal,name,product:productId}]});
        }else{
            sale.products[index]={
                quantity:sale.products[index].quantity+quantity,
                price,
                product:productId,
                subTotal:sale.products[index].subTotal+subTotal,
                name
            }
            setSale({...sale,products:[...sale.products]});
            console.log("valor repetido");
        }
        setTotalValue(total);
    }

    const handleSale=()=>{
        if(sale.products.length===0){
            console.log("No se puede procesar venta necesita por lo menos un producto");
            Swal.fire({
                title: 'Failed!',
                text: "No se puede procesar venta necesita por lo menos un producto",
                icon: 'error',
                confirmButtonText: 'Aceptar',
                allowOutsideClick:false
              });
            return;
        }
        postVentaSubscription({...sale,client:getValues().client,totalValue}).subscribe((resp)=>{
            console.log(resp.data);
            Swal.fire({
                title: 'Success!',
                text: 'Se ha registrado correctamente la venta',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                allowOutsideClick:false
              });
              setSale({product:"",totalValue:0,client:"",products:[]});
              setTotalValue(0);
        },(err)=>{
            console.log(err.response.data,err.response.status);
            Swal.fire({
                title: 'Failed!',
                text: `${err.response.data.err.message}`,
                icon: 'error',
                confirmButtonText: 'Aceptar',
                allowOutsideClick:false
              });
        }
        );
    }

    useEffect(() => {
        /* getClients().then((resp)=>{
            setClients(resp)
        });  */
        const $subscriptionClients=getClientSubscription().subscribe((res)=>{
            setClients(res.data.clients);
        },
        (err)=>{
            console.log(err.response.data,err.response.status);
        });

        const $subscriptionProducts=getProductSubscription().subscribe((res)=>{
            setProducts(res.data.products);
        },
        (err)=>{
            console.log(err.response.data,err.response.status);
        });


        return () => {
            $subscriptionClients.unsubscribe();
            $subscriptionProducts.unsubscribe();
        };
    }, []);




    return(
        <Fragment>
            <SaleContainerStyled>
                
                <SaleContent>


                    {/* <NotificationComponent message="Venta realizada exitosamente" title="Aviso !!!!"/> */}
                    <ClientContent>
                       <SectionGroup>
                       <label htmlFor="client">Seleccione el cliente :</label>
                       <SelectStyled name="client" id="client" ref={register({required:true})}>
                           {clients.length>0&&clients.map((e,i)=>(
                               <option key={i} value={e._id}>{e.name}</option>
                           ))}
                       </SelectStyled>
                       </SectionGroup>
                      <p>Factura : 00001</p>
                    </ClientContent>



                    <ProductContent onSubmit={handleSubmitTwo(onSubmitTwo)}>
                    
                       <SectionGroup>
                         <label htmlFor="product">Producto :</label>
                         <SelectStyled name="product" id="product" ref={registerTwo} onChange={handleProductChange}>
                              <option key={-1} value="">Seleccione</option>
                             {products.length>0&&products.map((e,i)=>(
                                 <option key={i} value={`${e._id}-${e.price}-${e.name}`}>{e.name}</option>
                             ))}
                         </SelectStyled>
                      </SectionGroup>
                      <SectionGroup>
                          <label htmlFor="price">Precio :</label>
                          <InputStyled type="number" min="1" defaultValue="0" readOnly name="price" id="price" ref={registerTwo}/>
                      </SectionGroup>
                      <SectionGroup>
                          <label htmlFor="quantity">Cantidad :</label>
                          <InputStyled type="number" step="1" name="quantity" min="1" id="quantity" ref={registerTwo}/>
                      </SectionGroup>

                      <SectionGroup>
                        <ButtonStyled>Agregar</ButtonStyled>
                      </SectionGroup>
                    </ProductContent>



                    <TableContent>
                        <TableSaleStyled>
                            <TableHeader>
                                <span>Producto</span>
                                <span>Cantidad</span>
                                <span>Precio</span>
                                <span>Subtotal</span>
                                <span>Acciones</span>
                            </TableHeader>


                            <TableBody>
                               <div>
                               {sale.products.map((e,i)=>(<TRow key={i}>
                                  <span>{e.name}</span>
                                  <span>{e.quantity}</span>
                                  <span>{e.price}</span>
                                  <span>{e.subTotal.toFixed(2)}</span>
                                  <span><i className="far fa-trash-alt" style={{cursor:'pointer'}} onClick={()=>deleteRow(i)}></i></span>
                                </TRow>))} 
                               </div>
                                <TRow key={-1}>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span>Total :</span>
                                  <span>{totalValue.toFixed(2)}</span>
                            </TRow>
                            </TableBody>


                            <TableFooter>
                              <ButtonStyled onClick={handleSale}>Guardar</ButtonStyled>
                            </TableFooter>

                        </TableSaleStyled>
                    </TableContent>



                </SaleContent>
                
            </SaleContainerStyled>
        </Fragment>
    )

}

export default SaleContainer;