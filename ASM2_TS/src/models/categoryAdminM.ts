// class
// properties => private
// constructor
// method getter setter
// method xử lí chức năng
export default class CategoryModel {
    private id: string;
    private ten: string;
    constructor(id: string, ten: string) {
        this.id = id;
        this.ten = ten;
    }
    get Id() {
        return this.id
    }
    set Id(id: string) {
        this.id = id;
    }
    get Name() {
        return this.ten
    }
    set Name(ten: string) {
        if (ten.length == 0)
            this.ten = 'uncategory';
        else
            this.ten = ten;
    }
    add(url: string) {
        fetch(url, {
            headers: { 'content-type': 'application/json' },
            method: 'post',
            body: JSON.stringify(this)
        }).then(res => {
            console.log(res);
            // window.location.href = '?ctrl=cate'
        }).catch(rej => {
            console.log(rej);
        })
    }
    update(url: string) {
        fetch(url, {
            headers: { 'content-type': 'application/json' },
            method: 'put',
            body: JSON.stringify(this)
        }).then(res => {
            console.log(res);
            // window.location.href = '?ctrl=cate'
        }).catch(rej => {
            console.log(rej);
        })
    }
    delete(url: string) {
        fetch(url, {
            headers: { 'content-type': 'application/json' },
            method: 'delete',
        }).then(res => {
            console.log(res);
            // window.location.href = '?ctrl=cate'
        }).catch(rej => {
            console.log(rej);
        })
    }

}