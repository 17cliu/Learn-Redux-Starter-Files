import React from 'react';

const Comments = React.createClass({
    // when it doesn't make sense to make a separate class for a list item,
    // make another render function that can be called in the main render fn
    // for it instead.
    renderComment (comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment">&times;</button>
                </p>
            </div>
        );
    },

    render () {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment)}
            </div>
        );
    }
});

export default Comments;
