import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import CustomersContainer from '../containers/CustomersContainer'
import CustomerShowTileContainer from '../containers/CustomerShowTileContainer'
import SearchUsersContainer from '../containers/SearchUsersContainer'

const App = (props) => {
  
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/users/:user_id/customers/:id" component={CustomerShowTileContainer} />
          <Route exact path="/users/:id/customers" component={CustomersContainer} />
          <Route exact path="/users/" component={SearchUsersContainer} />
        </Switch>
    </BrowserRouter>
  )
}

export default App
