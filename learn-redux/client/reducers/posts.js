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
    // the state here is the list of posts.
    // console.log('post reducer', state, action);

    switch (action.type) {
        case 'INCREMENT_LIKES':
            const i = action.index;

            // process like and return updated state.
            // make a copy of the existing state, make change on the copy,
            // return changed copy.
            return [
                // get all posts before the one we're updating
                ...state.slice(0, i),
                // this is the post we're updating
                {
                    // get all the properties of this posts that didn't change
                    ...state[i],
                    // increment likes for this post
                    likes: state[i].likes + 1
                },
                // get all posts after the one we're updating
                ...state.slice(i + 1)
            ];
        default:
            // didn't have to do anything for this action; return unchanged state.
            return state;
    }

    return state;
}
