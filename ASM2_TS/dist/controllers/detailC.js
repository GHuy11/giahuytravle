import { ProductModel } from "../models/productM.js";
import { ProductView } from "../views/detail.js";
export class Product {
    data = [];
    url = 'http://localhost:3000/sp/${id}';
    view = new ProductView();
    async fetchData() {
        let res = await fetch(this.url);
        let cate = await res.json();
        this.data = cate.map((e) => new ProductModel(e.id, e.ten, e.hinh, e.gia));
    }
    async getAll() {
        await this.fetchData();
        this.view.showTable(this.data, 'main');
    }
    async getId() {
        let id = window.location.search;
        let res = await fetch(this.url + id);
        let cate = await res.json();
        this.data = cate.map((e) => new ProductModel(e.id, e.ten, e.hinh, e.gia));
    }
}
