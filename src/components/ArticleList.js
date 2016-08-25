import React, { Component } from 'react';
import Article from './Article';
import toggleArticle from '../decorators/toggleArticle';

export default class ArticleList extends Component {
    /*state = {
        openArticleId: null
    };

    toggleOpenArticle = id => ev => {
        if (ev) {
            ev.preventDefault();
        }

        this.setState({
            openArticleId: id
        })
    };*/

    render() {
        const articleItems = this.props.articles.map(articleObject =>
            <li key = {articleObject.id}>
                <Article article = {articleObject}
                         isOpen = {this.props.isOpen}
                         toggleOpen = {this.props.toggleOpen}
                         isDoubleClick = {this.props.isDoubleClick}
                />
            </li>);

        return (
            <ul>
                {articleItems}
            </ul>
        )
    }
}

export default toggleArticle(ArticleList);
