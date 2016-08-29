import { EventEmiter } from 'events';

class ArticleStore extends EventEmiter {
    constructor(initialStore = []) {
        this._items = {};

        initialStore.forEach(this._add);
    }

    getAll() {
        return Object.keys(this._items)
            .map(this.getById);
    }

    getById = (id) => this._items[id];

    _delete(id) {
        delete this._items(id);
    }

    _add = (item) => {
        this._items[item.id] = item;
    };

    addChangeListener(callback) {

    }

    removeChangeListener(callback) {

    }

    emitChange() {

    }
}

export default ArticleStore;
