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
                    <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
                </p>
            </div>
        );
    },

    render () {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment)}

                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    {/* in react, can't reference dom elements; instead we put
                    refs on the form fields and will reference those instead. */}
                    <input type="text" ref="author" placeholder="Author" />
                    <input type="text" ref="comment" placeholder="Comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        );
    },

    handleSubmit (e) {
        // prevent default form action
        e.preventDefault();

        // we can also access route param here.
        const { postId } = this.props.params;

        // this is how we access those refs.
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;

        // process comment.
        this.props.addComment(postId, author, comment);

        // clear form; apparently the `reset` method is default html/js O__O
        this.refs.commentForm.reset();
    }
});

export default Comments;
