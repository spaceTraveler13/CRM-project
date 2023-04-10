// массив для заявок
let requests = loadRequests();

class Request {
    constructor(id, name, phone, email, product) {
        this.id = id,
        this.name = name,
        this.phone = phone,
        this.email = email,
        this.product = product,
        this.date = new Date().toISOString(),
        this.status = 'new'
    }
}
// объект для вывода названия продукта
const products = {
    'site-spa': 'Веб-приложение',
    'site-visit': 'Сайт-визитка',
    'site-shop': 'Интернет-магазин',
    'site-land': 'Лендинг',
    'site-corp': 'Многостраничный сайт'
}
// объект для вывода бэйджа
const statuses = {
    'new': 'Новая',
    'inwork': 'В работе',
    'complete': 'Завершена'
}
const filter = {
    products: 'all',
    status: 'all'
}
function changeFilter(props, value) {
    filter[props] = value;
    return filter
}
function filterRequests(filter) {
    let filteredRequest;
    if(filter.products !== 'all') {
        filteredRequest = requests.filter((request) => request.product === filter.products);
        return prepareRequests(filteredRequest) 
    }
}
// функ.добавление заявки
function addRequest (formData) {
    // определение id
    const id = requests.length > 0 ? requests[requests.length - 1]['id'] + 1 : 1;
    // создание новой заявки
    const request = new Request(id, formData.get('name'),formData.get('phone'),formData.get('email'),formData.get('product'));
    // пуш в массив 
    requests.push(request);
    // сохранение в локалстор
    saveRequests();
}
// сохранение в локалстор
function saveRequests() {
    localStorage.setItem('requests', JSON.stringify(requests));
}
// подгрузка данных в массив
function loadRequests() {
    return localStorage.getItem('requests') ? JSON.parse(localStorage.getItem('requests')) : [];
}
// получение подготовленных заявок
function getRequests(){
    return prepareRequests(requests);
}
// подготовка заявки для таблицы(корректировка даты, вывод имени продукта, вывод бейджа)
function prepareRequests(requests){
   return requests.map(function(item){
        return {
            ...item,
            date: new Date(item.date).toLocaleDateString(),
            productName: products[item.product],
            statusName: statuses[item.status]
        }
    })
}
function getRequestById(id) {
    const request = requests.find((item) => item.id == id);
    request.dateDate = new Date(request.date).toLocaleDateString();
    request.dateTime = new Date(request.date).toLocaleTimeString();
    return request
}
function updateRequest(formData) {
    const request = getRequestById(formData.get('id'));
    console.log("🚀 ~ file: model.js:71 ~ updateRequest ~ request:", request)
    console.log("🚀 ~ file: model.js:71 ~ updateRequest ~ formData.get('id'):", formData.get('id'))
    request.name = formData.get('name');
    request.email = formData.get('email');
    request.phone = formData.get('phone');
    request.product = formData.get('product');
    request.status = formData.get('status');
    saveRequests();
}
export {addRequest, getRequests, getRequestById, updateRequest, changeFilter, filterRequests}