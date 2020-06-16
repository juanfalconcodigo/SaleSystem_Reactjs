import React,{lazy,Suspense}  from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
const HomeComponentLazy=lazy(()=>import('./home.component'));
const ProfileContainerLazy=lazy(()=>import('./profile/profile.container'));
const ProductContainerLazy=lazy(()=>import('./product/product.container'));
const SaleContainerLazy=lazy(()=>import('./sale/sale.container'));
const MenuComponentLazy=lazy(()=>import('../../components/menu/menu.component'));
const HomeRouting=({match:{path}})=>{
    return(
        <Suspense fallback={<span>Loading...</span>}>
            <MenuComponentLazy/>
           <Switch>
              <Route exact path={`${path}`} component={HomeComponentLazy}/>
              <Route path={`${path}/username`} component={ProfileContainerLazy}/>
              <Route path={`${path}/product`} component={ProductContainerLazy}/>
              <Route path={`${path}/sale`} component={SaleContainerLazy}/>
              <Redirect from="**" to={`${path}`}/>
           </Switch>
        </Suspense>
    )
}

export default HomeRouting;