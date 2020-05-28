import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../../routes';
// import Loader from '../Loader';

function App() {
  return (
    <Switch>
      <Suspense fallback="Loader">
        <Route
          path={routes.HomePage.path}
          component={routes.HomePage.component}
        />
      </Suspense>
    </Switch>
  );
}

export default App;
