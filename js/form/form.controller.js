import {addTestReq} from '/form.test-data.js'
import * as view from '/form.view.js';
import * as model from '/../model.js';

function init() {
    renderTestData();
    setupEvents();
}
// рендер тестовых данных в форму
function renderTestData(){
    view.setTestData(addTestReq());
}
// прослушка формы
function setupEvents(){
    view.elements.form.addEventListener('submit', formDataCollect)
}
// сбор данных из формы
function formDataCollect(e){
    e.preventDefault();
    const formData = view.getFormData();
    model.addRequest(formData);
    view.clearForm();
    renderTestData();
}

init();