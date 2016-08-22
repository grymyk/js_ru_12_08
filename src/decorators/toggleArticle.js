import React from 'react';

//Декораторы создают для переиспользования кода. Их следует делать максимеально универсальными, 
//не привязывайся к названиям сущностей типа Article. Лучше называй toggleOpenItem, например
export default (Component) => {
    return class toggleArticleComponent extends React.Component {
        state = {
            //еще ты используешь openArticleId - инициализируй его тоже
            isOpen: false,
            isDoubleClick: false
        };

        toggleArticle = ev => {
            //Лучше не вводить дополнительных состояний. Ведь ты можешь просто проверить, совпадает ли openArticleId c id
            console.log('Decor toggleOpenArticle');
            console.log('Decor isDoubleClick: ', isDoubleClick);

            if (ev) {
                ev.preventDefault();
            }
            
            //а вот переменной id у тебя здесь нигде нет
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
