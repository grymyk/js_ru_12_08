import React, {Component, PropTypes} from 'react';
import { articleStore } from '../stores';
import ArticleList from './ArticleList';

class ContainerList extends Component {
    static propTypes = {

    };

    constructor() {
        super();

        this.state = {
            articles: articleStore.getAll()
        };
    }

    handleChange = () => {
        this.setState({
            articles: articleStore.getAll()
        });
    };

    componentDidMount() {
        articleStore.addChangeListerner(this.handleChange);
    }

    componentWillMount() {
        articleStore.removeChangeListerner(this.handleChange);
    }

    render() {
        return (
            <ArticleList articles = {this.state.articles} />
        )
    };
}

export default ContainerList;