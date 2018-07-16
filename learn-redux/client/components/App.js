import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps (state) {
    return {
        posts: state.posts,
        comments: state.comments
    };
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

// pass state and dispatch to app via props, then pass it all to main.
// usually when passing props, you have to pass from parent to children. this
// is pretty painful if you have to pass through many levels. instead, you
// can use connect to pass directly from one component to another one.
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
