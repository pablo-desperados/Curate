import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import CustomersContainer from '../containers/CustomersContainer'
import CustomerShowTileContainer from '../containers/CustomerShowTileContainer'
import SearchUsersContainer from '../containers/SearchUsersContainer'
import CustomerForm from './CustomerForm'
import UserShowContainer from '../containers/UserShowContainer'

const App = (props) => {

  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/users/:user_id/customers/:id" component={CustomerShowTileContainer} />
          <Route exact path="/users/:id/customers" component={CustomersContainer} />
          <Route exact path="/users/:user_id" component={UserShowContainer} />
          <Route exact path="/users/" component={SearchUsersContainer} />
        </Switch>
    </BrowserRouter>
  )
}

export default App
