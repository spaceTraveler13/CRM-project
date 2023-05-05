import * as model from "/../model.js";
import * as view from "./table.view.js";

function init() {
    const requests = model.getRequests();
    view.renderRequests(requests);
    addEventListeners();
}
function addEventListeners() {
    view.elements.select.addEventListener('change', filterProducts);
}
function filterProducts() {
    const filter = model.changeFilter('products', this.value);
    const filteredRequests = model.filterRequests(filter);
    view.renderRequests(filteredRequests);
}
init();