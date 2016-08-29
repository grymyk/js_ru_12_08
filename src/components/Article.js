import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    handleDelete = (ev) => {
        ev.preventDefault();

        console.log('handleDelete');
        console.log('Article ID: ', this.props.article.id);
    };

    render() {
        //console.log(this.props);

        const { article: { text, title, comments}, isOpen, toggleOpen } = this.props;

        const body = isOpen ? <section>{text}<CommentList comments = {comments}/></section> : null;

        return (
            <div>
                <h3 onClick = {toggleOpen}>{title}
                    -- <a href="#" onClick={this.handleDelete}>Delete Me</a>
                </h3>
                {body}
            </div>
        )
    }
}

export default Article