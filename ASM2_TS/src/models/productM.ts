export class ProductModel {
    private id:number;
    private id_loaitour:number;
    private title: string;
    private img:string;
    private price: number;
    private sale: number;
    private ngayKH: string;
    private noiKH: string;
    private thoigianKH: string;
    private lich_trinh: string;
        constructor( id:number,id_loaitour:number, title: string, img:string, price:number, sale:number, ngayKH:string, noiKH:string, thoigianKH:string, lich_trinh:string) {
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
        set Id(id:number) {
            this.id = this.id;
        }
        get Id_loai() {
            return this.id_loaitour;
        }
        set Id_loai(id_loaitour:number) {
            this.id = this.id_loaitour;
        }
        get Name() {
            return this.title;
        }
        set Name(title: string) {
            if (title.length == 0) {
                this.title = 'unproduct';
            } else {
                this.title = title;
            }
        }
        get hinh() {
            return this.img;
        }
        set hinh(img:string) {
            this.img = img;
        }
        get gia() {
            return this.price;
        }
        set gia(price:number) {
            // if(price <= 0) {
            //     this.price = '0';
            // } else {
            //     this.price = price;
            // }
            this.price = price;
        }
        get Sale(){
            return this.sale;
        }
        set Sale(sale:number){
            this.sale = sale
        }
        get NgayKH(){
            return this.ngayKH;
        }
        set NgayKH(ngayKH:string){
            this.ngayKH = ngayKH
        }
        get NoiKH(){
            return this.noiKH;
        }
        set NoiKH(noiKH:string){
            this.noiKH = noiKH
        }
        get ThoigianKH(){
            return this.thoigianKH;
        }
        set ThoigianKH(thoigianKH:string){
            this.thoigianKH = thoigianKH
        }
        get Lich_trinh(){
            return this.lich_trinh;
        }
        set Lich_trinh(lich_trinh:string){
            this.lich_trinh = lich_trinh
        }
    }