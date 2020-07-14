import React, {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import {MyRoutes} from "../MyRoutes";
import {} from "./NavBar.module.css"

export const NavBar = () => {
  const myRoutes = MyRoutes;
  const [authOpen, setAuthOpen] = useState(false);
  const [MyTitle, setMyTitle] = useState("");

  // TODO add redux logic here

  useEffect(() => {
      titleHandler();
  }, [window.location.pathname])

    function titleHandler() {
      let docTitle = myRoutes.find( item => item.path == window.location.pathname);
        setMyTitle(docTitle ? docTitle['caption'] : "");
    }

    function authHandler() {
      setAuthOpen(!authOpen) ;
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
                <li><NavLink to="/auth" onClick={authHandler}>Войти</NavLink></li>
            </ul>
        </div>
    </nav>
    )
}