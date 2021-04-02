import { Switch, Route, Router } from 'react-router-dom';
import Client from '../components/pages/Client';
import routerHistory from '../infra/historyRouter';

import paths from './paths';

const RouterConfig = () => (
  <Router history={routerHistory.getInstance()}>
    <Switch>
      <Route
        exact
        path={paths.CLIENT_CREATE}
        component={Client}
      />
    </Switch>
  </Router>
);

export default RouterConfig;
