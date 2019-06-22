import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

// Listen for changes to the current location.
const unlisten = history.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search);
});

export const removeHistoryListener = () => unlisten();
