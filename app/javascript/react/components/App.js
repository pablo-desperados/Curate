import React from 'react'
import { BrowserRouter, Route} from "react-router-dom"
import CustomersContainer from '../containers/CustomersContainer'

const App = (props) => {
  return (
    <BrowserRouter>
        <Route exact path="/users/:id/customers" component={CustomersContainer} />
    </BrowserRouter>
  )
}

export default App
