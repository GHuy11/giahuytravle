export class CategoryView {
    showTable(data, tagname) {
        let kq = `
            <li><a href="index.html">Trang chủ</a></li>`;
        data.forEach(e => {
            kq += `
                <li><a href="loai.html?id=${e.Id}">${e.Name}</a></li>`;
        });
        document.querySelector('.main-menu').innerHTML = kq;
    }
}
