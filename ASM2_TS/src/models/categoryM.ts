export default class CategoryModel {
    private id: string;
    private title: string;
    constructor(id: string, title: string) {
        this.id = id;
        this.title = title;
    }
    get Id() {
        return this.id;
    }
    set Id(id: string) {
        this.id = id;
    }
    get Name() {
        return this.title;
    }
    set Name(title: string) {
        if (title.length == 0) {
            this.title = 'uncategory';
        } else {
            this.title = title;
        }
    }
}