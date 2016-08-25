import React from 'react';

export default (Component) => {
    return class toggleArticleComponent extends React.Component {
        state = {
            isOpen: false,
            isDoubleClick: false
        };

        toggleOpenArticle = (id , isDoubleClick) => ev => {
            console.log('Decor toggleOpen');

            if (ev) {
                ev.preventDefault();
            }

            this.setState({
                openArticleId: this.state.id,
                isDoubleClick: !this.state.isDoubleClick
            })
        };

        render() {
            return <Component {... this.props}
                isOpen = {this.state.isOpen}
                toggleOpen = {this.toggleOpenArticle}
                isDoubleClick = {this.state.isDoubleClick}
            />
        }
    };
}