import React from 'react';

// for creating links
import { Link } from 'react-router';

const Main = React.createClass({
    render () {
        return (
            <div>
                <h1><Link to="/">Reduxstagram</Link></h1>
            </div>
        );
    }
});

export default Main;
