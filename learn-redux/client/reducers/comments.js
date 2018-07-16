// see posts.js for notes on reducers.

function postComments (state = [], action) {
    // the state here is the array of comments for a particular post
    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                { user: action.author, text: action.comment }
            ];
        case 'REMOVE_COMMENT':
            const i = action.commentIndex;
            return [
                ...state.slice(0, i),
                ...state.slice(i + 1)
            ];
        default:
            return state;
    }
}

export default function comments (state = {}, action) {
    // the state here is comments object, containing comments for all posts.
    console.log('comment reducer', state, action);

    if (typeof action.postId !== 'undefined') {
        const postId = action.postId;

        return {
            // take the current state.
            ...state,
            // overwrite this post with new one. will handle change
            // in this other reducer fn.
            [postId]: postComments(state[postId], action)
        };
    }

    return state;
}
