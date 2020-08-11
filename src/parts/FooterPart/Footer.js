import React from "react"
import {MyRoutes} from "../../MyRoutes";
import {NavLink} from "react-router-dom";
import {} from './Footer.css'

export const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Камрад!</h5>
            <p className="grey-text text-lighten-4">
              Ты тоже можешь принять участие в проекте!
            </p>
            <p>
              Это крайне весело и захватывающе! <NavLink to="/about">Вот сюда</NavLink> чтобы узнать подробнее, как
              внести свой вклад.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Навигатор: </h5>
            <ul>
              {MyRoutes.map((item, index) => {
                return <li key={item.component}><NavLink className="footer-a" to={item.path}>{item.caption}</NavLink></li>
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2020 <span role="img">&#128640;</span> by antonkashtanow
          <a className="grey-text text-lighten-4 right" href="https://github.com/shmihshmih/rush-client"><span role="img">&#128188;</span> to
            github</a>
        </div>
      </div>
    </footer>
  )
}