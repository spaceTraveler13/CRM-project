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
export {addRequest, getRequests}