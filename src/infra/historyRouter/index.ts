import { createBrowserHistory } from 'history';

const historyInstance = createBrowserHistory();

const routerHistory = {
  getInstance: () => historyInstance,

  push: (path: string) => {
    historyInstance.push(path);
  },
};

export default routerHistory;
