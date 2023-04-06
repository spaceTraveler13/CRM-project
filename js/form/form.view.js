const elements = {
    form: document.querySelector('.form'),
    name: document.querySelector('#name'),
    phone: document.querySelector('#phone'),
    email: document.querySelector('#email'),
    product: document.querySelector('#product')
}

function setTestData(data){
    elements.name.value = data.name;
    elements.phone.value = data.phone;
    elements.email.value = data.email;
    elements.product.value = data.product;
}

function getFormData() {
   return new FormData(elements.form);
}
function clearForm() {
    elements.form.reset();
}
export {elements,setTestData,getFormData,clearForm};