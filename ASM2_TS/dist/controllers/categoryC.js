import CategoryModel from "../models/categoryM.js";
import { CategoryView } from "../views/categoryV.js";
export class Category {
    data = [];
    url = "http://localhost:3000/menu1";
    view = new CategoryView();
    async fetchData() {
        let res = await fetch(this.url);
        let cate = await res.json();
        this.data = cate.map((e) => new CategoryModel(e.id, e.title));
        console.log(this.data);
    }
    async getAll() {
        await this.fetchData();
        this.view.showTable(this.data, 'header .header-bottom .row-flex');
    }
}
