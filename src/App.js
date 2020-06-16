import React, { Fragment } from 'react';
import RoutingRoot from './routes';
import { GlobalStyled } from './assets/styles/_general';
import { UserContext } from './hooks';

const user={
  email:localStorage.getItem("email")||null,
  password:localStorage.getItem("password")||null
}

function App() {
  return (
    <Fragment>

      <GlobalStyled/>
      <UserContext.Provider value={user}>
      <RoutingRoot/>
      </UserContext.Provider>
      
    </Fragment>
  );
}

export default App;
