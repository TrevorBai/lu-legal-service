import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LegalService from './components/LegalService/LegalService'
import Layout from './hoc/Layout/Layout'
import Appointments from './components/Appointments/Appointments'


const App = () => {
  let routes = (
    <Switch>
      <Route path="/" exact component={LegalService} />
      <Route path="/appointments" component={Appointments} />
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
