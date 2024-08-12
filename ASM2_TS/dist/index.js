import { Category } from "./controllers/categoryC.js";
import { Product } from "./controllers/productC.js";
let queryString = window.location.search;
let param = new URLSearchParams(queryString);
let ctrl = param.get('ctrl');
let control = [];
switch (ctrl) {
    case "cate":
        control.push(new Category());
        break;
    case "product":
        control.push(new Product());
        break;
    case "detail":
        let id = param.get('id') ?? '';
        control.push(new Product());
    default:
        control.push(new Category());
        control.push(new Product());
        break;
}
let act = param.get("act");
if (act == null) {
    act = 'getAll';
}
let id = param.get('id') ?? '';
control.forEach(control => {
    eval("control." + act + "('" + id + "')");
});
