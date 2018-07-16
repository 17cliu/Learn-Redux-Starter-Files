// a reducer takes in two things:
// 1. the action (info about what happened); and
// 2. copy of current state.
// it applies the action and returns an updated copy of the store
//
// reducers edit state!!
//
// 💡 every time an action is dispatched, EVERY REDUCER RUNS, even if that
// reducer is technically irrelevant. each reducer therefore needs to decide
//  whether it needs to do anything for each action it handles.

export default function posts (state = [], action) {
    console.log(state, action);

    return state;
}
