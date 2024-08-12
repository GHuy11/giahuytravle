import ProductModel from "../models/productAdminM.js";
import { ProductView } from "../views/productAdminV.js";
export class Product {
    data = [];
    url = "http://localhost:3000/admin/tour";
    view = new ProductView();
    async fetchData() {
        let res = await fetch(this.url);
        let cate = await res.json();
        console.log(cate);
        this.data = cate.map((e) => new ProductModel(e.id, e.id_loaitour, e.title, e.img, e.price, e.sale, e.ngayKH, e.noiKH, e.thoigianKH, e.lich_trinh));
        console.log(this.data);
    }
    async getAll() {
        await this.fetchData();
        this.view.showTable(this.data, '.middle-content');
    }
    add() {
        this.view.add(`http://localhost:3000/admin/tour/add`, '.form--add');
    }
    async update(id) {
        //lấy dữ liệu theo id
        let res = await fetch(this.url + '/' + id);
        let e = await res.json();
        let a = new ProductModel(e.id, e.id_loaitour, e.title, e.img, e.price, e.sale, e.ngayKH, e.noiKH, e.thoigianKH, e.lich_trinh);
        //load form update
        this.view.update(this.url + '/' + id, a, '.form--add');
        console.log(a);
    }
    async delete(id) {
        //lấy dữ liệu theo id
        let res = await fetch(this.url + '/' + id);
        let e = await res.json();
        let a = new ProductModel(e.id, e.id_loaitour, e.title, e.img, e.price, e.sale, e.ngayKH, e.noiKH, e.thoigianKH, e.lich_trinh);
        //delete
        a.delete(this.url + "/" + id);
        window.location.href = "?ctrl=product";
    }
}
