export class ProductView {
    showTable(data, tagname) {
        let kq = ``;
        data.forEach(e => {
            kq += `
            <div id='left'> <img src='${e.Hinh}'> </div>
            <div id='right'>
            <h3>${e.Name}</h3> <p>Gia: ${Number(e.Gia).toLocaleString("vi")} VND</p>
            <p>Giam gia: 10%</p> <p>Mau sac : Xanh</p>
            <p> <input type= 'number'value = '1'> </p>
            <button onclick="addtocart(${e.Id})">Thêm vào giỏ</button>
            </div>
        `;
        });
        let content = document.querySelector(tagname);
        content.innerHTML = `<div class='detail'>
        <div class="container">
            <h2>Chi tiet san pham</h2>
            <div id="detail">${kq}</div>
        </div>
    </div>`;
    }
}
