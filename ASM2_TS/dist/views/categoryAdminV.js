import CategoryModel from '../models/categoryAdminM.js';
export class CategoryView {
    showTable(data, tagname) {
        let kq = `
            <table>
            <tr>
            <th>Mã loại</th>
            <th>Tên loại</th>
            <th><a href="?ctrl=cate&act=add">Thêm</a></th>
            </tr>`;
        data.forEach(e => {
            kq += `<tr>
            <td>${e.Id}</td>
            <td>${e.Name}</td>
            <td>
            <div class="button-group">
            <a class='btn btn-warning' href="?ctrl=cate&act=update&id=${e.Id}">sửa</a></th>
            <a class='btn btn-danger' href="?ctrl=cate&act=delete&id=${e.Id}">xóa</a></th>
            </div>
            </td>
            </tr>`;
        });
        kq += "</table>";
        document.querySelector('#projects-desk').innerHTML = kq;
    }
    add(url, tagname) {
        let form = `
        <h2 style="text-align:center;">FORM THÊM DANH MỤC</h2>
        <form >
            <div>masp:<input type = 'text' id='txtid'></div>
            <div>ten:<input type = 'text' id='txtname'></div>
            <button type='button'>Thêm</button>
        </form>`;
        let content = document.querySelector(tagname);
        content.innerHTML = form;
        document.querySelector('button').addEventListener("click", () => {
            let id = document.querySelector("#txtid").value;
            let name = document.querySelector("#txtname").value;
            let data = new CategoryModel(id, name);
            data.add(url);
            window.location.href = "?ctrl=cate";
        });
    }
    update(url, data, tagname) {
        let form = `<form method='post'>
            <div style='margin-bottom: 10px;'>masp:<input type = 'text' id='txtid' value='${data.Id}'></div>
            <div style='margin-bottom: 10px;'>ten:<input type = 'text' id='txtname' value='${data.Name}'></div>
            <button type='button'>Gửi</button>
        </form>`;
        let content = document.querySelector(tagname);
        content.innerHTML = form;
        document.querySelector('button').addEventListener("click", () => {
            let id = document.querySelector("#txtid").value;
            let name = document.querySelector("#txtname").value;
            data.Name = name;
            data.update(url);
            window.location.href = "?ctrl=cate";
        });
    }
}
