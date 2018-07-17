import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import root reducer.
import rootReducer from './reducers';

// load init data
import comments from './data/comments';
import posts from './data/posts';

// create object for default data which we just loaded
const defaultState = {
    posts,
    comments
};

const store = createStore(rootReducer, defaultState);

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
