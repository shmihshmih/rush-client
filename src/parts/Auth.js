import React, {useEffect, useState} from "react"
import './Auth.css'
import {connect} from "react-redux";
import { hideAuth, showAuth } from '../station/action'

function Auth  (props)  {
   const [authOpen, setAuthOpen] = useState(props.isAuthOpenReducer.isAuthOpen);
   const [authVisClass, setAuthVisClass] = useState("authNotVisible");

   function modalHandler() {
     authOpen ? props.setHide() : props.setOpen();
     setAuthOpen(props.isAuthOpenReducer.isAuthOpen)
   }

   useEffect(() => {
    authOpen ? setAuthVisClass("authVisible") : setAuthVisClass("authNotVisible")
   }, [authOpen])

  return (
    <div>
      <div id="modal1" className="modal modal-trigger">
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
      <button onClick={modalHandler}>TUTUTUTUT</button>
      <div className={authVisClass}>ya tutta</div>
    </div>
  )
}

const mapStateToProps = (stateFromReducer) => {
  return stateFromReducer;
}

const mapDispatchToProps = {
  setHide: hideAuth,
  setOpen: showAuth
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);