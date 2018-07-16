import React from 'react';

// for creating links
import { Link } from 'react-router';

const Main = React.createClass({
    // use cloneElement to pass props down to chidlren
    render () {
        return (
            <div>
                <h1><Link to="/">Reduxstagram</Link></h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    }
});

export default Main;
