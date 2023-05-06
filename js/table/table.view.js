const elements = {
    table: document.querySelector("#tbody"),
    select: document.querySelector('#productSelect')
}

function renderRequests(requests) {
    elements.table.innerHTML = '';
    const badges = {
        new: 'badge-danger',
        inwork: 'badge-inwork',
        complete: 'badge-success'
    }
    requests.forEach(function(item){
        const template = `<tr>
                            <th>${item.id}</th>
                            <td>${item.date}</td>
                            <td>${item.productName}</td>
                            <td>${item.name}</td>
                            <td>${item.email}</td>
                            <td>${item.phone}</td>
                            <td>
                                <div class="${badges[item.status]}">
                                    ${item.statusName}
                                </div>
                            </td>
                            <td><a href="edit.html?id=${item.id}" class="redux-request">Редактировать</a></td>
                        </tr>`;
        elements.table.insertAdjacentHTML('beforeend', template)
    });
}

export {elements, renderRequests}