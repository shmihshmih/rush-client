import React, {useEffect} from "react"
import {} from './Auth.module.css'
import ReactDOM from 'react-dom';
import {connect} from "react-redux";

 export const Auth: React.FC = () => {
  let isAuthOpen = false;

  useEffect( () => {
  }, [isAuthOpen])

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
      <p>МОдальное окно видно</p>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  isAuthOpen: state.app.isAuthOpen
})
