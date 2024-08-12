import { Category } from "./controllers/categoryAdminC.js";
import { Product } from "./controllers/productAdminC.js";
let queryString = window.location.search;
let param = new URLSearchParams(queryString);
let ctrl = param.get('ctrl');
let control;
switch (ctrl) {
    case "cate":
        control = new Category();
        break;
    case "product":
        control = new Product();
        break;
    default:
        control = new Category();
        control = new Product();
        break;
}
let act = param.get("act");
if (act == null) {
    act = 'getAll';
}
let id = param.get('id') ?? '';
eval("control." + act + "('" + id + "')");
