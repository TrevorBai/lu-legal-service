import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LegalService from './components/LegalService/LegalService'
import Layout from './hoc/Layout/Layout'

const App = () => {
  let routes = (
    <Switch>
      <Route path="/" exact component={LegalService} />
      {/* <Route path="/contact" component={Contact} />
      <Route path="/orders" component={CreateTask} />
      <Route path="/user" component={CreateUser} /> */}
    </Switch>
  )
  
  return (
    <div>
      <Layout>
        <div>
          {routes}
        </div>
      </Layout>
    </div>
  )
}

export default App;
