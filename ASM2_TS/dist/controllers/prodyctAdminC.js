import ProductModel from "../models/productAdminM.js";
import { ProductView } from "../views/productAdminV.js";
export class Product {
    data = [];
    url = "http://localhost:3000/san_pham";
    view = new ProductView();
    async fetchData() {
        let res = await fetch(this.url);
        let cate = await res.json();
        this.data = cate.map((e) => new ProductModel(e.Id, e.Name, e.Hinh, e.Gia));
        console.log(this.data);
    }
    async getAll() {
        await this.fetchData();
        this.view.showTable(this.data, 'article');
    }
    add() {
        this.view.add(this.url, 'article');
    }
    async update(id) {
        //lấy dữ liệu theo id
        let res = await fetch(this.url + '/' + id);
        let e = await res.json();
        let a = new ProductModel(e.Id, e.Name, e.Hinh, e.Gia);
        //load form update
        this.view.update(this.url + '/' + id, a, 'article');
    }
    async delete(id) {
        //lấy dữ liệu theo id
        let res = await fetch(this.url + '/' + id);
        let e = await res.json();
        let a = new ProductModel(e.Id, e.Name, e.Hinh, e.Gia);
        //delete
        a.delete(this.url + "/" + id);
        window.location.href = "?ctrl=cate";
    }
}
