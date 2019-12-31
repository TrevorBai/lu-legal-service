import React, { Fragment } from 'react'
import './Modal.css'
import Backdrop from '../Backdrop/Backdrop'
import { Transition } from 'react-transition-group'


const Modal = props => {
  const cssClasses = [
    "Modal",
    props.show ? "ModalOpen" : "ModalClosed"
  ]

  return (
    <Transition
      mountOnEnter
      unmountOnExit
      in={props.show} 
      timeout={3000}>
      {state => (
        <Fragment>
          <Backdrop 
            show={props.show} 
            clicked={props.modalClosed} />
          <div className={cssClasses.join(' ')}>
            {props.children}
          </div>
        </Fragment>
      )}
    </Transition>
  )
}

export default Modal