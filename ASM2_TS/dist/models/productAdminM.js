// class
// properties => private
// constructor
// method getter setter
// method xử lí chức năng
export default class ProductModel {
    id;
    id_loaitour;
    title;
    img;
    price;
    sale;
    ngayKH;
    noiKH;
    thoigianKH;
    lich_trinh;
    constructor(id, id_loaitour, title, img, price, sale, ngayKH, noiKH, thoigianKH, lich_trinh) {
        this.id = id;
        this.id_loaitour = id_loaitour;
        this.title = title;
        this.img = img;
        this.price = price;
        this.sale = sale;
        this.ngayKH = ngayKH;
        this.noiKH = noiKH;
        this.thoigianKH = thoigianKH;
        this.lich_trinh = lich_trinh;
    }
    get Id() {
        return this.id;
    }
    set Id(id) {
        this.id = this.id;
    }
    get Id_loai() {
        return this.id_loaitour;
    }
    set Id_loai(id_loaitour) {
        this.id = this.id_loaitour;
    }
    get Name() {
        return this.title;
    }
    set Name(title) {
        if (title.length == 0) {
            this.title = 'unproduct';
        }
        else {
            this.title = title;
        }
    }
    get hinh() {
        return this.img;
    }
    set hinh(img) {
        this.img = img;
    }
    get gia() {
        return this.price;
    }
    set gia(price) {
        // if(price <= 0) {
        //     this.price = '0';
        // } else {
        //     this.price = price;
        // }
        this.price = price;
    }
    get Sale() {
        return this.sale;
    }
    set Sale(sale) {
        this.sale = sale;
    }
    get NgayKH() {
        return this.ngayKH;
    }
    set NgayKH(ngayKH) {
        this.ngayKH = ngayKH;
    }
    get NoiKH() {
        return this.noiKH;
    }
    set NoiKH(noiKH) {
        this.noiKH = noiKH;
    }
    get ThoigianKH() {
        return this.thoigianKH;
    }
    set ThoigianKH(thoigianKH) {
        this.thoigianKH = thoigianKH;
    }
    get Lich_trinh() {
        return this.lich_trinh;
    }
    set Lich_trinh(lich_trinh) {
        this.lich_trinh = lich_trinh;
    }
    add(url) {
        fetch(url, {
            headers: { 'content-type': 'application/json' },
            method: 'post',
            body: JSON.stringify(this)
        }).then(res => {
            console.log(res);
            // window.location.href = '?ctrl=product'
        }).catch(rej => {
            console.log(rej);
        });
    }
    update(url) {
        fetch(url, {
            headers: { 'content-type': 'application/json' },
            method: 'put',
            body: JSON.stringify(this)
        }).then(res => {
            console.log(res);
            // window.location.href = '?ctrl=cate'
        }).catch(rej => {
            console.log(rej);
        });
    }
    delete(url) {
        fetch(url, {
            headers: { 'content-type': 'application/json' },
            method: 'delete',
        }).then(res => {
            console.log(res);
            // window.location.href = '?ctrl=cate'
        }).catch(rej => {
            console.log(rej);
        });
    }
}
