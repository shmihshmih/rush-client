import React, {useEffect, useState} from "react"
import './Auth.css'
import {connect} from "react-redux"
import {hideAuth, showAuth} from '../../station/action'
import ReactDOM from 'react-dom'

function Auth(props) {
  //TODO harcoded change to bd
  const users = [
    {
      name: 'Dodik',
      email: "dodik@protonmail.com",
      avatar: "https://picsum.photos/200/200?random=3",
      isDriver: false,
      isPedestrian: true,
      about: "Ya takoy klassniy, horosho razgadivayui zagadki da i viibshe umnik hot, kuda, chmafff'",
      birth: "16-05-1992",
      rate: "25",
      car: "Chevrolet Cruise",
      isCarVisible: true,
      carNumber: "c250jv",
      isCarNumberVisible: true
    },
    {
      name: 'bobolik',
      email: "bobolik@protonmail.com",
      avatar: "https://picsum.photos/200/200?random=3",
      isDriver: false,
      isPedestrian: true,
      about: "Ya takoy klassniy, horosho razgadivayui zagadki da i viibshe umnik hot, kuda, chmafff'",
      birth: "16-05-1992",
      rate: "25",
      car: "Chevrolet Cruise",
      isCarVisible: true,
      carNumber: "c250jv",
      isCarNumberVisible: true
    },
    {
      name: 'sokolik',
      email: "sokolik@protonmail.com",
      avatar: "https://picsum.photos/200/200?random=3",
      isDriver: false,
      isPedestrian: true,
      about: "Ya takoy klassniy, horosho razgadivayui zagadki da i viibshe umnik hot, kuda, chmafff'",
      birth: "16-05-1992",
      rate: "25",
      car: "Chevrolet Cruise",
      isCarVisible: true,
      carNumber: "c250jv",
      isCarNumberVisible: true
    }
  ]

  const [authStatus, setAuthStatus] = useState(props.isAuthOpenReducer);

  function modalHandler(e) {
    let fod = users.find( user => user.email == "sokolik@protonmail.com")
    fod ? console.log('est') : console.log('nonono');
    setInterval( () => {
      authStatus.isAuthOpen ? props.hideAuth() : props.showAuth()
    }, 2000)
  }

  function emailInputHandler(e) {
    console.log(e.target.value)
  }

  useEffect(() => {
    setAuthStatus(props.isAuthOpenReducer)
  }, [props.isAuthOpenReducer.isAuthOpen])

  let Auth = (
    <>
      <div id="modal1" className={authStatus.isAuthOpen ? "modal open-modal" : "modal"}>
        <div className="modal-content">
          <h4>Войти</h4>
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" onChange={emailInputHandler}/>
                  <label htmlFor="email">Email</label>
                  <span className="helper-text" data-error="wrong" data-success="right">
                      Введите свою электронную почту
                    </span>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <a onClick={modalHandler} className="modal-close waves-effect waves-green btn-flat">Войти</a>
        </div>
      </div>
      <div onClick={modalHandler} className={authStatus.isAuthOpen ? "modal-overlay" : ""}/>
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