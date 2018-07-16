// a reducer takes in two things:
// 1. the action (info about what happened); and
// 2. copy of current state.
// it applies the action and returns an updated copy of the store

export default function comments (state = [], action) {
    console.log('comment reducer', state, action);

    return state;
}
