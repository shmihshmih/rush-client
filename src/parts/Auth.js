import React, {useEffect, useState} from "react"
import './Auth.css'
import {connect} from "react-redux";
import { hideAuth, showAuth } from '../station/action'

function Auth  (props)  {
   const [authStatus, setAuthStatus] = useState(props.isAuthOpenReducer);
   function modalHandler() {
     authStatus.isAuthOpen ? props.hideAuth() : props.showAuth()
   }
   useEffect(() => {
     setAuthStatus(props.isAuthOpenReducer)
   }, [props.isAuthOpenReducer.isAuthOpen])
  return (
    <>
      <div id="modal1" className="modal open modal-trigger">
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (stateFromReducer) => {
  return stateFromReducer;
}

const mapDispatchToProps = {
  hideAuth,
  showAuth
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);