// Styles
import "styles/_index.scss"
import "./views/index.pug"

//Scripts
import { ProductsModel } from "./assets/scripts/model"
import { ProductsView } from "./assets/scripts/view"
import { ProductsController } from "./assets/scripts/controller"

window.onload = (function () {
  let model = new ProductsModel();
  let view = new ProductsView(model);
  let controller = new ProductsController(model, view);
})();


//     function () {
//   require("scripts/products");
//   require("scripts/itemHover");
// };
