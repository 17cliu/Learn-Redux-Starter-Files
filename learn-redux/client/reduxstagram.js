import React from 'react';

// package for handling dom stuff.
import { render } from 'react-dom';

// import css; will compile css and insert as <style> tag in <head>.
import css from './styles/style.styl'

// import our components.
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps.
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// everything is a renderable component, even the Router!
const router = (
    <Router history={browserHistory}>
        {/* when route matches this path, render this component. */}
        <Route path="/" component={Main}>
            {/* if the route doesn't match any other paths specfied here,
            render the subcomponent specified in IndexRoute into the main
            component. else, render the subcomponent specified by the
            matching subroute.*/}
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path="/view/:postId" component={Single}></Route>
        </Route>
    </Router>
);

// render html into an existing root element on the page.
// look! we render the router into the page directly! it will figure out
// what to display.
render(router, document.getElementById('root'));
