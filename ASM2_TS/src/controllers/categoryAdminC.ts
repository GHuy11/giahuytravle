import CategoryModel from "../models/categoryAdminM.js";
import { CategoryView } from "../views/categoryAdminV.js";
export class Category {
    data: CategoryModel[] = [];
    url = "http://localhost:3000/";
    view = new CategoryView()
    async fetchData() {
        let res = await fetch(this.url);
        let cate = await res.json();
        this.data = cate.map((e: any) => new CategoryModel(e.id, e.ten));
        console.log(this.data);
    }
    async getAll() {
        await this.fetchData()
        this.view.showTable(this.data, '.middle-content');
    }
    add() {
       this.view.add(this.url, '.middle-content');

    }
    async update(id: string) {
        //lấy dữ liệu theo id
        let res = await fetch(this.url + '/' + id);
        let e = await res.json();
        let a = new CategoryModel(e.id, e.ten);
        //load form update
        this.view.update(this.url + '/' + id, a, '.middle-content')
    }
    async delete(id: string) {
        //lấy dữ liệu theo id
        let res = await fetch(this.url + '/' + id);
        let e = await res.json();
        let a = new CategoryModel(e.id, e.ten);
        //delete
        a.delete(this.url+"/"+id)
        window.location.href="?ctrl=cate"

    }
}