import ProductModel from '../models/productAdminM.js';
export class ProductView {
    showTable(data, tagname) {
        let kq = ``;
        data.forEach(e => {
            console.log(e);
            kq += `
            <tr>
                <td>${e.Id}</td>
                <td>${e.Id_loai}</td>
                <td>${e.Name}</td>
                <td>${e.gia}</td>
                <td>${e.Sale}</td>
                <td>${e.NgayKH}</td>
                <td>${e.NoiKH}</td>
                <td>${e.ThoigianKH}</td>
                <td>${e.Lich_trinh}</td>
                <td>${e.hinh}</td>

            <td><button><a href="?ctrl=product&act=update&id=${e.Id}">Sửa</a></button> |
            <button><a href="?ctrl=product&act=delete&id=${e.Id}">xóa</a></button></td>
            </tr>
            `;
        });
        document.querySelector('table').innerHTML = `<thead>
        <tr>
            <th>ID</th>
            <th>Id loại tour</th>
            <th>Title</th>
            <th>Giá</th>
            <th>Giảm giá</th>
            <th>nayKH</th>
            <th>noiKH</th>
            <th>thoigianKH</th>
            <th>lịch trình</th>
            <th class="th-img" style="width: 12%;">Hình</th>
            <th>Hành Động</th>
        </tr>
        
    </thead>
    <tbody id="tour-admin">
        ${kq}
    </tbody>`;
    }
    add(url, tagname) {
        let form = `
        <form class="col-8 border border-primary p-3 m-auto">
            <h1>Form Thêm tour</h1>
            <div style="display: flex;" class="content-add">
                <div >
                    <div class="mb-3">Id
                    <input type="text" id="id" class="form-control border-primary">
                    </div>
                    <div class="mb-3">Id_loại
                    <input type="text" id="id_loai" class="form-control border-primary">
                    </div>
                    <div class="mb-3">Title
                    <input type="text" id="title" class="form-control border-primary">
                    </div>
                    <div class="mb-3">Giá
                        <input type="text" id="price" class="form-control border-primary">
                    </div>
                </div>
                <div >
                    <div class="mb-3">Giảm giá
                    <input type="number" id="sale" class="form-control border-primary">
                    </div>
                    <div class="mb-3">Lịch trình
                    <input type="text" id="lich_trinh" class="form-control border-primary">
                    </div>
                    <div class="mb-3">Nơi khởi hành
                        <input type="text" id="noiKH" class="form-control border-primary">
                    </div>
                </div>
                <div >
                    <div class="mb-3">thời gian
                    <input type="time" id="thoigianKH" class="form-control border-primary">
                    </div>
                    <div class="mb-3">Ngày khởi hành
                        <input type="date" id="ngayKH" class="form-control border-primary">
                        </div>
                    
                    <div class="mb-3">Hình
                        <input type="file" id="img" class="form-control border-primary">
                    </div>
                </div>
            </div>
            <div class="mt-3"><button type="button" class="btn btn-warning py-2">Thêm tour</button></div>
        </form>
        `;
        let content = document.querySelector(tagname);
        content.innerHTML = form;
        document.querySelector('button').addEventListener("click", () => {
            let id = Number(document.querySelector("#id").value);
            let id_loai = Number(document.querySelector("#id_loai").value);
            let title = document.querySelector("#title").value;
            let price = Number(document.querySelector("#price").value);
            let sale = Number(document.querySelector("#sale").value);
            let lich_trinh = document.querySelector("#lich_trinh").value;
            let noiKH = document.querySelector("#noiKH").value;
            let ngayKH = document.querySelector("#ngayKH").value;
            let img = document.querySelector("#img").value;
            let thoigianKH = document.querySelector("#thoigianKH").value;
            let data = new ProductModel(id, id_loai, title, img, price, sale, ngayKH, noiKH, thoigianKH, lich_trinh);
            data.add(url);
            window.location.href = "?ctrl=product";
        });
    }
    update(url, data, tagname) {
        // console.log(data);
        let form = `<form class="col-8 border border-primary p-3 m-auto">
        <h1>Form cập nhật tour</h1>
        <div style="display: flex;" class="content-add">
            <div >
                <input type="hidden" id="id" value="${data.Id}" class="form-control border-primary">
                <div class="mb-3">Id_loại
                <input type="text" id="id_loai" value="${data.Id_loai}" class="form-control border-primary">
                </div>
                <div class="mb-3">Title
                <input type="text" id="title" value="${data.Name}" class="form-control border-primary">
                </div>
                <div class="mb-3">Giá
                    <input type="text" id="price" value="${data.gia}" class="form-control border-primary">
                </div>
            </div>
            <div >
                <div class="mb-3">Giảm giá
                <input type="number" id="sale" value="${data.Sale}" class="form-control border-primary">
                </div>
                <div class="mb-3">Lịch trình
                <input type="text" id="lich_trinh" value="${data.Lich_trinh}" class="form-control border-primary">
                </div>
                <div class="mb-3">Nơi khởi hành
                    <input type="text" id="noiKH" value="${data.NoiKH}" class="form-control border-primary">
                </div>
            </div>
            <div >
                <div class="mb-3">thời gian
                <input type="time" id="thoigianKH" value="${data.ThoigianKH}" class="form-control border-primary">
                </div>
                <div class="mb-3">Ngày khởi hành
                    <input type="date" id="ngayKH" value="${data.NgayKH}" class="form-control border-primary">
                    </div>
                
                <div class="mb-3">Hình
                    <input type="file" id="img" value="${data.hinh}" class="form-control border-primary">
                </div>
            </div>
        </div>
        <div class="mt-3"><button type="button" class="btn btn-warning py-2">Cập nhật </button></div>
    </form>`;
        let content = document.querySelector(tagname);
        content.innerHTML = form;
        document.querySelector('button').addEventListener("click", () => {
            let id = Number(document.querySelector("#id").value);
            let id_loai = Number(document.querySelector("#id_loai").value);
            let title = document.querySelector("#title").value;
            let price = Number(document.querySelector("#price").value);
            let sale = Number(document.querySelector("#sale").value);
            let lich_trinh = document.querySelector("#lich_trinh").value;
            let noiKH = document.querySelector("#noiKH").value;
            let ngayKH = document.querySelector("#ngayKH").value;
            let img = document.querySelector("#img").value;
            let thoigianKH = document.querySelector("#thoigianKH").value;
            let data = new ProductModel(id, id_loai, title, img, price, sale, ngayKH, noiKH, thoigianKH, lich_trinh);
            data.update(url);
            window.location.href = "?ctrl=product";
        });
    }
}
