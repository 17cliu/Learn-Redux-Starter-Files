import React from 'react';
import { Link } from 'react-router';

// to add css transitions, load this react add-on,
// and add it as an element in the rendered output.
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({
    render () {
        const { post, i, comments } = this.props;
        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>
                        <img src={post.display_src} alt={post.caption} className="grid-photo" />
                    </Link>

                    <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                        {/* the key is `post.likes` so that the animation runs whenever `post.likes` changes */}
                        <span key={post.likes} className="likes-heart">{post.likes}</span>
                    </CSSTransitionGroup>

                </div>

                <figcaption>
                    <p>{post.caption}</p>

                    <div className="control-buttons">
                        <button className="likes">&hearts; {post.likes}</button>
                        <Link className="button" to={`/view/${post.code}`}>
                            <span className="comment-count">
                                <span className="speech-bubble"></span>
                                {comments[post.code] ? comments[post.code].length : 0 }
                            </span>
                        </Link>
                    </div>
                </figcaption>
            </figure>
        );
    }
});

export default Photo;
