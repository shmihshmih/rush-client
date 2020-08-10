import React from "react"
import './Auth.css'
import {connect} from "react-redux"
import ReactDOM from 'react-dom'
import * as axios from "axios";
import {changeCurrentLogForm} from "../../station/actions/logInAction";
import {hideAuth, showAuth} from "../../station/actions/authAction";
import {closeLoginRegForm, openLoginForm, openRegForm} from "../../station/actions/regLoginFormAction";

function Auth(props) {
  //TODO harcoded change to bd
  const storageName = 'userData'

  function modalHandler() {
    props.isAuthOpenReducer.isAuthOpen ? props.hideAuth() : props.showAuth()
    props.closeLoginRegForm()
  }

  const inputKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      authHandler().then((req, res) => {
        console.log(res);
      });
    }
  }

  const onFormChange = (e) => {
    props.changeCurrentLogForm({ ...{[e.target.name]: e.target.value}})
    console.log(props)
  }

  const authHandler = async () => {
    try {
      axios.post('http://127.0.0.1:5000/api/auth/', {
        //...currentUser
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
              props.openLogForm()
              console.log(props)
            } else {
              props.openRegForm()
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

  let Auth = (
    <>
      <div id="modal1" className={props.isAuthOpenReducer.isAuthOpen ? "modal open-modal" : "modal"}>
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
                    value={props.currentLogForm.email}
                    onChange={e => onFormChange(e)}
                    onKeyPress={inputKeyPressHandler}
                  />
                  <label htmlFor="email">Email</label>
                  <span className="helper-text" data-error="wrong" data-success="right">
                    Введите свою электронную почту
                  </span>
                </div>

                {props.whichFormOpen.formType === 'login'
                  ?
                  <div>
                    <div className="input-field col s12">
                      <input
                        id="password"
                        type="password"
                        className="validate"
                        name="password"
                        value={props.currentLogForm.password}
                        onChange={e => onFormChange(e)}
                      />
                      <label htmlFor="password">Введите пароль</label>
                    </div>
                  </div>
                  : ''
                }

                {props.whichFormOpen.formType === 'registration'
                  ?
                  <div>

                    <div className="input-field col s12">
                      <input
                        id="password"
                        type="password"
                        className="validate"
                        name="password"
                        value={props.currentLogForm.password}
                        onChange={e => onFormChange(e)}
                      />
                      <label htmlFor="password">Введите пароль</label>
                    </div>

                    <div className="input-field col s12">
                      <input
                        id="name"
                        type="text"
                        className="validate"
                        name="name"
                        value={props.currentLogForm.name}
                        onChange={e => onFormChange(e)}
                      />
                      <label htmlFor="name">Введите имя</label>
                    </div>

                    <div className="input-field col s12">
                      <input
                        id="birth_date"
                        type="text"
                        className="validate"
                        name="birth"
                        value={props.currentLogForm.birth}
                        onChange={e => onFormChange(e)}
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
                            value={props.currentLogForm.about}
                            onChange={e => onFormChange(e)}
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
                            value={props.currentLogForm.isDriver}
                            onChange={e => onFormChange(e)}
                          />
                          <span>Водитель</span>
                        </label>
                        <label className="col ">
                          <input
                            type="checkbox"
                            className="filled-in"
                            name="isPedestrian"
                            value={props.currentLogForm.isPedestrian}
                            onChange={e => onFormChange(e)}
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
                        value={props.currentLogForm.avatar}
                        onChange={e => onFormChange(e)}
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
                            value={props.currentLogForm.car}
                            onChange={e => onFormChange(e)}
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
                              value={props.currentLogForm.isCarVisible}
                              onChange={e => onFormChange(e)}
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
                            value={props.currentLogForm.carNumber}
                            onChange={e => onFormChange(e)}
                          />
                          <label htmlFor="carNumber">Номер авто</label>
                        </div>
                        <div className="input-field col s6">
                          <label>
                            <input
                              type="checkbox"
                              className="filled-in"
                              name="isCarNumberVisible"
                              value={props.currentLogForm.isCarNumberVisible}
                              onChange={e => onFormChange(e)}
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
      <div onClick={modalHandler} className={props.isAuthOpenReducer.isAuthOpen ? "modal-overlay" : ""}/>
    </>
  )
  return ReactDOM.createPortal(Auth, document.getElementById('auth-modal'))
}

const mapStateToProps = (stateFromReducer) => {
  return stateFromReducer;
}

const mapDispatchToProps = {
  hideAuth,
  showAuth,
  changeCurrentLogForm,
  openLoginForm,
  openRegForm,
  closeLoginRegForm
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);