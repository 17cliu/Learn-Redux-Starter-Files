import React from 'react';

// package for handling dom stuff.
import { render } from 'react-dom';

// import css; will compile css and insert as <style> tag in <head>.
import css from './styles/style.styl'

// import our components.
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps.
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

// import store
import store, { history } from './store';

// everything is a renderable component, even the Router!
const router = (
    <Provider store={store}>
        {/* the provider exposes store to application. */}
        <Router history={history}>
            {/* when route matches this path, render this component. */}
            <Route path="/" component={App}>
                {/* if the route doesn't match any other paths specfied here,
                render the subcomponent specified in IndexRoute into the main
                component. else, render the subcomponent specified by the
                matching subroute.*/}
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
);

// render html into an existing root element on the page.
// look! we render the router into the page directly! it will figure out
// what to display.
render(router, document.getElementById('root'));
