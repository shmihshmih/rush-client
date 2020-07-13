import React from 'react';
import {AboutPage} from "./pages/AboutPage";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {RatingPage} from "./pages/RatingPage";
import {ProfilePage} from "./pages/ProfilePage";
import {NavBar} from "./parts/NavBar";
import {SoloQuestPage} from "./pages/SoloQuests";
import { createStore } from 'redux'
import {rootReducer} from "./station/reducer";
import { Provider } from 'react-redux';

function App() {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <NavBar/>
          <div className="container">
            <Switch>
              <Route path='/' component={MainPage} exact/>
              <Route path='/rating' component={RatingPage} />
              <Route path='/about' component={AboutPage} />
              <Route path='/profile/:id' component={ProfilePage} />
              <Route path='/solo' component={SoloQuestPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
