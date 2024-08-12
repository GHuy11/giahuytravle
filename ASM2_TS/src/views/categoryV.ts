import CategoryModel from '../models/categoryM.js';
export class CategoryView {
    showTable(data: CategoryModel[], tagname: string){
        let kq=`
            <li><a href="index.html">Trang chủ</a></li>`;
        data.forEach(e => {
            kq+=`
                <li><a href="loai.html?id=${e.Id}">${e.Name}</a></li>`;
        });
        (document.querySelector('.main-menu') as HTMLElement).innerHTML = kq;

    }
}
