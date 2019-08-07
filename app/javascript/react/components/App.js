import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import CustomersContainer from '../containers/CustomersContainer'
import CustomerShowTileContainer from '../containers/CustomerShowTileContainer'
import SearchUsersContainer from '../containers/SearchUsersContainer'
import CustomerForm from './CustomerForm'

const App = (props) => {
  debugger
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/users/:user_id/customers/:id" component={CustomerShowTileContainer} />
          <Route exact path="/users/:id/customers" component={CustomersContainer} />
          <Route exact path="/users/" component={SearchUsersContainer} />
          <Route exact path="/users/:user_id/customers/:id/edit" component={CustomerForm} />
        </Switch>
    </BrowserRouter>
  )
}

export default App
