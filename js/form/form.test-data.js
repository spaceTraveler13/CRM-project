// Конструктор для создания тестовых заявок
class testRequest {
    constructor(name,phone,email,product) {
        this.name = name,
        this.phone = phone,
        this.email = email,
        this.product = product
    }
}
// Массив с тестовыми заявками
const testRequests = [
    new testRequest('Джон Коннор', 111111, 'konnor@mail.ru', 'site-spa'),
    new testRequest('Винни Джонс', 22222, 'jones@mail.ru', 'site-visit'),
    new testRequest('Корбен Даллас', 33333, 'korbenBaby@mail.ru', 'site-shop'),
    new testRequest('Геральт из Ривии', 44444, 'witcher@mail.ru', 'site-land'),
    new testRequest('Джилл Валентайн', 55555, 'racoonCity@mail.ru', 'site-corp'),
    new testRequest('Солер из Асторы', 666666, 'praiseTheSun@mail.ru', 'site-spa'),
]  
// Рандомное число для выбора объекта из массива
let randomNumber = (max) => {return Math.floor(Math.random() * max)}
// Ф-я для выбора случайного элемента из массива
export const addTestReq = () => {
    let random = randomNumber(testRequests.length);
    return testRequests[random];
    // // Забираем значения из разметки
    // document.querySelector('#name').value = randomEl.name;
    // document.querySelector('#phone').value = randomEl.phone;
    // document.querySelector('#email').value = randomEl.email;
    // document.querySelector('#product').value = randomEl.product;
}