import { ProductModel } from "../models/productM.js";
import { ProductView } from "../views/productV.js";
export class Product {
    data: ProductModel[] = [];
    url = 'http://localhost:3000/tourhot/4';
    view = new ProductView()
    async fetchData() {
        let res = await fetch(this.url);
        let cate = await res.json();
        this.data = cate.map((e:any) => new ProductModel(e.id, e.id_loaitour, e.title, e.img, e.price, e.sale, e.ngayKH, e.noiKH, e.thoigianKH, e.lich_trinh))
    }
    async getAll() {
        await this.fetchData()
        this.view.showTable(this.data, '.hot-product');
    }
    async fetchId() {
        let id = window.location.search;
        let res = await fetch(this.url+id);
        let cate = await res.json();
        this.data = cate.map((e:any) => new ProductModel(e.id, e.id_loaitour, e.title, e.img, e.price, e.sale, e.ngayKH, e.noiKH, e.thoigianKH, e.lich_trinh))
    }
    async getId(){
        await this.fetchId()
        this.view.show(this.data, 'main')
    }
}