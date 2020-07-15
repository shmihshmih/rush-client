import React, {useEffect, useState} from "react"
import './Auth.css'
import {connect} from "react-redux"
import { hideAuth, showAuth } from '../station/action'
import ReactDOM from 'react-dom'

function Auth  (props)  {
   const [authStatus, setAuthStatus] = useState(props.isAuthOpenReducer);
   function modalHandler() {
     authStatus.isAuthOpen ? props.hideAuth() : props.showAuth()
   }
   useEffect(() => {
     setAuthStatus(props.isAuthOpenReducer)
   }, [props.isAuthOpenReducer.isAuthOpen])

  let Auth = (
    <>
      <div id="modal1" className={authStatus.isAuthOpen ? "modal open-modal" : "modal"}>
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
      <div onClick={modalHandler} className={authStatus.isAuthOpen ? "modal-overlay" : ""} />
    </>
  )
  return ReactDOM.createPortal(Auth, document.getElementById('auth-modal'))
}

const mapStateToProps = (stateFromReducer) => {
  return stateFromReducer;
}

const mapDispatchToProps = {
  hideAuth,
  showAuth
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);