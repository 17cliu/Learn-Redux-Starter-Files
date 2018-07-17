import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import root reducer.
import rootReducer from './reducers';

// load initial/default data
import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
    posts,
    comments
};

// add store enhancers. particularly we init the redux dev tool extension,
// if it exists, which will allow us to inspect the store and time travel.
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

// use webpack hot module reloading, so that when code for reducers change,
// they're reloaded on the fly.
if (module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;
