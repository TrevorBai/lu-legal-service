import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LegalService from './components/LegalService/LegalService'
import Layout from './hoc/Layout/Layout'
import Appointments from './components/Appointments/Appointments'
import ContactUs from './components/ContactUs/ContactUs'

const App = () => {
  let routes = (
    <Switch>
      <Route path="/" exact component={LegalService} />
      <Route path="/appointments" component={Appointments} />
      <Route path="/contact" component={ContactUs} />
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
