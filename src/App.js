import React, { Suspense } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import LegalService from './components/LegalService/LegalService'
import Layout from './hoc/Layout/Layout'

const Appointments = React.lazy(() => {
  return import('./components/Appointments/Appointments')
})

const ContactUs = React.lazy(() => {
  return import('./components/ContactUs/ContactUs')
})


const App = () => {
  let routes = (
    <Switch>
      <Route path="/" exact component={LegalService} />
      <Route path="/appointments" render={props => <Appointments {...props} />} />
      <Route path="/contact" render={props => <ContactUs {...props} />} />
    </Switch>
  )
  
  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          {routes}
        </Suspense>
      </Layout>
    </div>
  )
}

export default withRouter(App)
