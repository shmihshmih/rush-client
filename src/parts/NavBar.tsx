import React, {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import {MyRoutes} from "../MyRoutes";
import {} from "./NavBar.module.css"

export const NavBar: React.FC = () => {

    const myRoutes = MyRoutes;
  let isAuthOpen = false;

    const [MyTitle, setMyTitle] = useState(myRoutes.find( item => item.path == window.location.pathname)['caption']);

    useEffect(() => {
        titleHandler();
    }, [window.location.pathname])

  useEffect( ()=> {

  }, [])

    function titleHandler() {
        setMyTitle(myRoutes.find( item => item.path == window.location.pathname)['caption'])
        document.title = MyTitle;
    }

    function authHandler() {
      isAuthOpen = !isAuthOpen;
      console.log(isAuthOpen);
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