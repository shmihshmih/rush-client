import React, {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import {MyRoutes} from "../MyRoutes";

export const NavBar: React.FC = () => {

    const myRoutes = MyRoutes;

    const [MyTitle, setMyTitle] = useState(myRoutes.find( item => item.path == window.location.pathname)['caption']);

    useEffect(() => {
        titleHandler();
    }, [window.location.pathname])

    function titleHandler() {
        setMyTitle(myRoutes.find( item => item.path == window.location.pathname)['caption'])
        document.title = MyTitle;
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
                <li><NavLink to="/auth">Авторизация</NavLink></li>
                <li><NavLink to="/registration">Регистрация</NavLink></li>
            </ul>
        </div>
    </nav>
    )
}