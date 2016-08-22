import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            date: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string.isRequired
        }),

        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    };

    render() {
        const { article: { text, title, comments }, isOpen, toggleOpen, isDoubleClick } = this.props;

        //const body = isOpen ? <section>{text}<CommentList comments = {comments}/></section> : null;

        let body = null;

        console.log('isOpen: %s -- isDoubleClick: %s', isOpen, isDoubleClick);

        if (isOpen && isDoubleClick) {
            body = <section>{text}<CommentList comments = {comments} /></section>
        } else {
            body = null;
        }

        return (
            <div>
                <h3 onClick = {toggleOpen}> {title} </h3>
                {body}
            </div>
        );
    }
}

export default Article
