import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import TopArtists from './TopArtists';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/signin" component={Login} />
          <Route exact path="/user/dash" component={TopArtists} />
          <Route path="/user/:access_token/:refresh_token" component={TopArtists} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
