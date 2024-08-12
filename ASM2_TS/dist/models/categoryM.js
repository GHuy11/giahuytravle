export default class CategoryModel {
    id;
    title;
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
    get Id() {
        return this.id;
    }
    set Id(id) {
        this.id = id;
    }
    get Name() {
        return this.title;
    }
    set Name(title) {
        if (title.length == 0) {
            this.title = 'uncategory';
        }
        else {
            this.title = title;
        }
    }
}
