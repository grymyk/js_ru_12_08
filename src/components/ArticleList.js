import React, { Component } from 'react';
import Article from './Article';
import toggleArticle from '../decorators/toggleArticle';

export default class ArticleList extends Component {
    static propTypes = {
        articles: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
    };

    state = {
        openArticleId: null,
        isDoubleClick: false
    };

    /*toggleArticle (id, isDoubleClick) = ev => {
        if (ev) {
            ev.preventDefault();
        }

        this.setState({
            openArticleId: id,
            isDoubleClick: !this.state.isDoubleClick
        });
    }*/

    render() {
        const articleItems = this.props.articles.map(articleObject =>
            <li key = {articleObject.id}>
                <Article article = {articleObject}
                    isOpen = {this.state.openArticleId === articleObject.id}
                    toggleOpen = {this.toggleArticle(articleObject.id, this.state.isDoubleClick)}
                    isDoubleClick = {this.state.isDoubleClick}
                />
            </li>
        );

        return (
            <ul>
                {articleItems}
            </ul>
        )
    }
}

export default toggleArticle(ArticleList);
