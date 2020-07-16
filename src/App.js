import React from 'react';
import {AboutPage} from "./pages/AboutPage/AboutPage";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage";
import {RatingPage} from "./pages/RatingPage/RatingPage";
import {ProfilePage} from "./pages/ProfilePage/ProfilePage";
import NavBar from "./parts/NavBarPart/NavBar";
import {SoloQuestPage} from "./pages/QuestsPage/QuestsPage";
import {Footer} from "./parts/FooterPart/Footer";
import {NoMatchPage} from "./pages/NoMatchPage/noMatchPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <div className="container">
          <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/rating' component={RatingPage}/>
            <Route exact path='/about' component={AboutPage}/>
            <Route exact path='/profile/:id' component={ProfilePage}/>
            <Route exact path='/solo' component={SoloQuestPage}/>
            <Route component={NoMatchPage} />
          </Switch>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
