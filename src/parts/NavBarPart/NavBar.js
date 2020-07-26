import React, {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import {MyRoutes} from "../../MyRoutes";
import {} from "./NavBar.module.css"
import {connect} from "react-redux";
import {hideAuth, showAuth} from "../../station/action";

function NavBar(props) {
  const myRoutes = MyRoutes;
  const [MyTitle, setMyTitle] = useState(document.title);
  const [authorization, setAuthorization] = useState(false)

  // TODO add redux logic here

  useEffect(() => {
    titleHandler();
  }, [window.location.pathname])

  useEffect(() => {
  }, [props.isAuthOpenReducer.isAuthOpen])

  function titleHandler() {
    //TODO change hardcoded titlechanger into component
    let docTitle = myRoutes.find(item => item.path == window.location.pathname);
    setMyTitle(docTitle ? docTitle['caption'] : "RUSH GAME Project");
    document.title = MyTitle;
  }

  function authHandler() {
    props.isAuthOpenReducer.isAuthOpen ? props.hideAuth() : props.showAuth()
  }

  function signOff() {
    //localStorage.removeItem(storageName)
    setAuthorization(false)
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <ul onClick={() => titleHandler()} id="nav-mobile" className="left">
          {MyRoutes.map((item, index) => {
            return <li key={item.component}><NavLink to={item.path}>{item.caption}</NavLink></li>
          })}
        </ul>
        <ul className="right">
          {authorization === true
            ?
            <>
              <li>
                <NavLink to="/profile/:id" exact>Профиль</NavLink>
              </li>
              <li>
                <a onClick={signOff} exact>Выйти</a>
              </li>
            </>
            :
            <li><a onClick={authHandler}>Войти</a></li>
          }
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = (stateFromReducer) => {
  return stateFromReducer
}

const mapDispatchToProps = {
  hideAuth,
  showAuth
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);