// class
// properties => private
// constructor
// method getter setter
// method xử lí chức năng
export default class CategoryModel {
    id;
    ten;
    constructor(id, ten) {
        this.id = id;
        this.ten = ten;
    }
    get Id() {
        return this.id;
    }
    set Id(id) {
        this.id = id;
    }
    get Name() {
        return this.ten;
    }
    set Name(ten) {
        if (ten.length == 0)
            this.ten = 'uncategory';
        else
            this.ten = ten;
    }
    add(url) {
        fetch(url, {
            headers: { 'content-type': 'application/json' },
            method: 'post',
            body: JSON.stringify(this)
        }).then(res => {
            console.log(res);
            // window.location.href = '?ctrl=cate'
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
