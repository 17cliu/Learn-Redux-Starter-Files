import React from 'react';

// package for handling dom stuff
import { render } from 'react-dom';

// bring in css
import css from './styles/style.styl'

import Main from './components/Main';

// render html into an existing root element on the page
render(<Main/>, document.getElementById('root'));
