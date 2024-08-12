export class ProductView {
    showTable(data, tagname) {
        let kq = ``;
        data.forEach(e => {
            kq += `
            <article>
            <div class="img">
                <img src="./img/${e.hinh}" alt="">
                <div class="discount">-${e.Sale}%</div>
            </div>
            <div class="content">
                <p class="title"><b><a href="chitiet.html">${e.Name}</a></b></p>
                <p class="noiKH">Nơi khởi hành: <b> ${e.NoiKH}</b></p>
                <p class="ngayKH">Ngày khởi hành: <b> ${e.NgayKH}</b></p>
                <p class="thoigianKH">Thời gian khởi hành: <b> ${e.ThoigianKH}</b></p>
                <p class="lich_trinh">Lịch trình: <b> ${e.Lich_trinh}</b></p>
                <p>Giá:<b class="price">${e.gia} ₫</b></p>
                <div class="btn-book">
                    <a href="" >Đặt tour</a>
                </div>
            </div>
        </article> `;
        });
        let content = document.querySelector("#tour-hot");
        content.innerHTML = kq;
    }
    async show(data, tagname) {
        let kq = ``;
        data.forEach(e => {
            kq += `
                
        `;
        });
        let content = document.querySelector(tagname);
        content.innerHTML = kq;
    }
}
