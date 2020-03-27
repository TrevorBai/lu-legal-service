import React, { Suspense } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import LegalService from './components/LegalService/LegalService'
import Layout from './hoc/Layout/Layout'

const NewAppointment = React.lazy(() => {
  return import('./components/Appointments/NewAppointment')
})

const ContactUs = React.lazy(() => {
  return import('./components/ContactUs/ContactUs')
})

const SignIn = React.lazy(() => {
  return import('./components/SignIn/SignIn')
})

const Register = React.lazy(() => {
  return import('./components/Register/Register')
})

const App = () => {
  let routes = (
    <Switch>
      <Route path="/" exact component={LegalService} />
      <Route path="/appointments" render={props => <NewAppointment {...props} />} />
      <Route path="/contact" render={props => <ContactUs {...props} />} />
      <Route path="/signIn" render={props => <SignIn {...props} />} />
      <Route path="/register" render={props => <Register {...props} />} />
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
