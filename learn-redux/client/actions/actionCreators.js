// for each action, send only the minimal required info

// increment
// add like for a given post
export function increment (postId) {
    return {
        type: 'INCREMENT_LIKES',
        postId
    };
}

// add comment
export function addComment (postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    };
}

// remove comment
export function removeComment (postId, commentIndex) {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        commentIndex
    };
}
