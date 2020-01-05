import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ContactData from './ContactData'
import AppointmentSummary from '../Appointments/AppointmentSummary/AppointmentSummary'

jest.mock('react-redux', () => ({
  useDispatch: () => {},
  useSelector: () => ({ loading: false })
}))

configure({ adapter: new Adapter() })

describe('<ContactData />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<ContactData />)
  })

  it('should render <AppointmentSummary /> when loading is false', () => {
    expect(wrapper.find(AppointmentSummary)).toHaveLength(1)
  })
})