import { Switch, Route, Router } from 'react-router-dom';
import ClientCreate from '../components/pages/Client/create';
import ClientList from '../components/pages/Client/list';
import routerHistory from '../infra/historyRouter';

import paths from './paths';

const RouterConfig = () => (
  <Router history={routerHistory.getInstance()}>
    <Switch>
      <Route
        exact
        path={paths.CLIENT_CREATE}
        component={ClientCreate}
      />
    </Switch>
    <Switch>
      <Route
        exact
        path={paths.CLIENT_LIST}
        component={ClientList}
      />
    </Switch>
  </Router>
);

export default RouterConfig;
