import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import CustomersContainer from '../containers/CustomersContainer'
import CustomerShowTileContainer from '../containers/CustomerShowTileContainer'

const App = (props) => {
  
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/users/:id/customers" component={CustomersContainer} />
          <Route exact path="/users/:user_id/customers/:id" component={CustomerShowTileContainer} />
        </Switch>
    </BrowserRouter>
  )
}

export default App
