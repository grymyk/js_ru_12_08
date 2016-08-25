import React, { PropTypes } from 'react'

function Comment(props) {
    if (!props.comment) {
        return null;
    }

    console.log(props);

    //const { comment: { user, text } } = props;
    const { comment } = props;

    return (
        <p>
            {comment.text}
            <strong>by {comment.user}</strong>
        </p>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.number,
        user: PropTypes.string,
        text: PropTypes.string.isRequired
    })
};

export default Comment;