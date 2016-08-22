import React from 'react';

export default (Component) => {
    return class toggleArticleComponent extends React.Component {
        state = {
            isOpen: false,
            isDoubleClick: false
        };

        toggleArticle = ev => {
            console.log('Decor toggleOpenArticle');
            console.log('Decor isDoubleClick: ', isDoubleClick);

            if (ev) {
                ev.preventDefault();
            }

            this.setState({
                openArticleId: id,
                isDoubleClick: !this.state.isDoubleClick
            });
        }

        render() {
            return <Component {... this.props}
                isOpen = {this.state.isOpen}
                toggleOpen = {this.toggleOpen}
                isDoubleClick = {this.state.isDoubleClick}
            />
        }
    };
}