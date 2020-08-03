import React, {useEffect, useState} from "react"
import './Auth.css'
import {connect} from "react-redux"
import {hideAuth, showAuth} from '../../station/action'
import ReactDOM from 'react-dom'
import * as axios from "axios";

function Auth(props) {
  //TODO harcoded change to bd
  const [authStatus, setAuthStatus] = useState(props.isAuthOpenReducer);
  const [currentUser, setCurrentUser] = useState({
    email: "",
    isCarNumberVisible: false,
    isCarVisible: false,
    isPedestrian: false,
    isDriver: false})
  const [openRegForm, setOpenRegForm] = useState('')
  const storageName = 'userData'

  function modalHandler() {
    authStatus.isAuthOpen ? props.hideAuth() : props.showAuth()
    setOpenRegForm('')
  }

  const inputKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      authHandler().then((req, res) => {
        console.log(res);
      });
    }
  }

  const authHandler = async () => {
    try {
      axios.post('http://127.0.0.1:5000/api/auth/', {
        ...currentUser
      })
        .then((res) => {
          if(res.data && res.data.token) {
            console.log('avtorizovalis!')
            localStorage.setItem(storageName, JSON.stringify({
              userEmail: res.data.email, token: res.data.token
            }))
            props.hideAuth()
          } else {
            if (res.data && (res.data.email || res.data.createdNow)) {
              setOpenRegForm('login')
              console.log(props)
            } else {
              setOpenRegForm('registration')
              console.log(props)
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (e) {
      console.log('error', e.message)
    }
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
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="validate"
                    value={currentUser.email}
                    onChange={e => setCurrentUser({...currentUser, ...{[e.target.name]: e.target.value}})}
                    onKeyPress={inputKeyPressHandler}
                  />
                  <label htmlFor="email">Email</label>
                  <span className="helper-text" data-error="wrong" data-success="right">
                    Введите свою электронную почту
                  </span>
                </div>

                {openRegForm === 'login'
                  ?
                  <div>
                    <div className="input-field col s12">
                      <input
                        id="password"
                        type="password"
                        className="validate"
                        name="password"
                        onChange={e => setCurrentUser({...currentUser, ...{[e.target.name]: e.target.value}})}
                      />
                      <label htmlFor="password">Введите пароль</label>
                    </div>
                  </div>
                  : ''
                }

                {openRegForm === 'registration'
                  ?
                  <div>

                    <div className="input-field col s12">
                      <input
                        id="password"
                        type="password"
                        className="validate"
                        name="password"
                        onChange={e => setCurrentUser({...currentUser, ...{[e.target.name]: e.target.value}})}
                      />
                      <label htmlFor="password">Введите пароль</label>
                    </div>

                    <div className="input-field col s12">
                      <input
                        id="name"
                        type="text"
                        className="validate"
                        name="name"
                        onChange={e => setCurrentUser({...currentUser, ...{[e.target.name]: e.target.value}})}
                      />
                      <label htmlFor="name">Введите имя</label>
                    </div>

                    <div className="input-field col s12">
                      <input
                        id="birth_date"
                        type="text"
                        className="validate"
                        name="birth"
                        onChange={e => setCurrentUser({...currentUser, ...{[e.target.name]: e.target.value}})}
                      />
                      <label htmlFor="birth_date">Дата рождения</label>
                      <span className="helper-text" data-error="wrong"
                            data-success="right">Введите в формате 01.01.1990</span>
                    </div>

                    <div className="col s12">
                      <div className="row">
                        <div className="input-field col s12">
                          <textarea
                            id="about"
                            className="materialize-textarea"
                            name="about"
                            onChange={e => setCurrentUser({...currentUser, ...{[e.target.name]: e.target.value}})}
                          />
                          <label htmlFor="about">О себе</label>
                          <span className="helper-text" data-error="wrong" data-success="right">Можно указать своё хобби, ключевые навыки и т.д.</span>
                        </div>
                      </div>
                    </div>

                    <div className="col s12">
                      <p>
                        <label className="col ">
                          <input
                            type="checkbox"
                            className="filled-in"
                            name="isDriver"
                            value={currentUser.isDriver}
                            onChange={e => setCurrentUser({...currentUser, ...{[e.target.name]: e.target.checked}})}
                          />
                          <span>Водитель</span>
                        </label>
                        <label className="col ">
                          <input
                            type="checkbox"
                            className="filled-in"
                            name="isPedestrian"
                            value={currentUser.isPedestrian}
                            onChange={e => setCurrentUser({...currentUser, ...{[e.target.name]: e.target.checked}})}
                          />
                          <span>Пассажир</span>
                        </label>
                      </p>
                    </div>

                    <div className="input-field col s12">
                      <input
                        id="avatar"
                        type="text"
                        className="validate"
                        name="avatar"
                        onChange={e => setCurrentUser({...currentUser, ...{[e.target.name]: e.target.value}})}
                      />
                      <label htmlFor="avatar">Ссылка на аватар</label>
                    </div>

                    <div className="col s12">
                      <div className="row">
                        <div className="input-field col s6">
                          <input
                            id="car"
                            type="text"
                            className="validate"
                            name="car"
                            onChange={e => setCurrentUser({...currentUser, ...{[e.target.name]: e.target.value}})}
                          />
                          <label htmlFor="car">Автомобиль</label>
                          <span className="helper-text" data-error="wrong" data-success="right">Марка авто</span>
                        </div>
                        <div className="input-field col s6">
                          <label>
                            <input
                              type="checkbox"
                              className="filled-in"
                              name="isCarVisible"
                              value={currentUser.isCarVisible}
                              onChange={e => setCurrentUser({...currentUser, ...{[e.target.name]: e.target.checked}})}
                            />
                            <span>Показывать всем</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col s12">
                      <div className="row">
                        <div className="input-field col s6">
                          <input
                            id="carNumber"
                            type="text"
                            className="validate"
                            name="carNumber"
                            onChange={e => setCurrentUser({...currentUser, ...{[e.target.name]: e.target.value}})}
                          />
                          <label htmlFor="carNumber">Номер авто</label>
                        </div>
                        <div className="input-field col s6">
                          <label>
                            <input
                              type="checkbox"
                              className="filled-in"
                              name="isCarNumberVisible"
                              value={currentUser.isCarNumberVisible}
                              onChange={e => setCurrentUser({...currentUser, ...{[e.target.name]: e.target.checked}})}
                            />
                            <span>Показывать всем</span>
                          </label>
                        </div>
                      </div>
                    </div>

                  </div>
                  : ''
                }

              </div>
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <a onClick={authHandler} className="modal-close waves-effect waves-green btn-flat">Войти</a>
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