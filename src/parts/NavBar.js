import React, {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import {MyRoutes} from "../MyRoutes";
import {} from "./NavBar.module.css"
import {connect} from "react-redux";
import {hideAuth, showAuth} from "../station/action";

function NavBar(props) {
  const myRoutes = MyRoutes;
  const [authOpen, setAuthOpen] = useState(props.isAuthOpenReducer.isAuthOpen);
  const [MyTitle, setMyTitle] = useState("");

  // TODO add redux logic here

  useEffect(() => {
      titleHandler();
  }, [window.location.pathname])

  useEffect( () => {
  }, [props.isAuthOpenReducer.isAuthOpen])

  function titleHandler() {
    let docTitle = myRoutes.find( item => item.path == window.location.pathname);
      setMyTitle(docTitle ? docTitle['caption'] : "");
  }

  function authHandler() {
    props.isAuthOpenReducer.isAuthOpen ? props.hideAuth() : props.showAuth()
  }

    return (
    <nav>
      <div className="nav-wrapper">
        <ul onClick={() => titleHandler()} id="nav-mobile" className="left hide-on-med-and-down">
          {MyRoutes.map( (item, index)=> {
            return <li key={item.component}><NavLink to={item.path}>{item.caption}</NavLink></li>
          } )}
        </ul>
        <ul className="right hide-on-med-and-down">
            <li><a onClick={authHandler}>Войти</a></li>
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