let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let usersAddres = [];

for (let item of users) {
    usersAddres.push(item.address);
};

console.log(usersAddres);
// ----------------------------------------------------------------------------------

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок 
//   за допомоги document.createElement. Всі данні в одному блоці.
for (let item of users) {
    let container = document.createElement('div');
    let endOfUser = document.createElement('hr');
    let newRow = document.createElement('br')
    for (let key in item) {
        if (typeof item[key] === 'object') {
            for (let addresKey in item[key]) {
                container.append(`${addresKey} - ${item[key][addresKey]}; `);
            };
        } else {
            container.append(`${key} - ${item[key]}; `, newRow.cloneNode());
        };
    };
    document.body.append(container, endOfUser)
};
// ---------------------------------------------------------------------------------

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги 
//   document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

for (let item of users) {
    let userContainer = document.createElement('div');
    userContainer.style.cssText = 'background-color: blue; margin-bottom:5px;'
    for (let key in item) {
        let keyContainer = document.createElement('div');
        if (typeof item[key] === 'object') {
            for (let addresKey in item[key]) {
                keyContainer.append(`${addresKey} - ${item[key][addresKey]}; `);
            };
        } else {
            keyContainer.append(`${key} - ${item[key]};`)
        };
        userContainer.appendChild(keyContainer);
    };
    document.body.appendChild(userContainer)
};
// ---------------------------------------------------------

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги 
//   document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, 
//   з блоками для кожної властивості

for (let item of users) {
    let userWrapper = document.createElement('div');
    userWrapper.style.cssText = 'background-color: yellow; margin:10px;'
    for (let key in item) {
        let keyValueWrapper = document.createElement('div');
        let keyWrapper = document.createElement('span');
        let valueWrapper = document.createElement('span');

        if (typeof item[key] === 'object') {
            let addressBlock = document.createElement('div');
            addressBlock.append(`${key} : `)
            for (let addresKey in item[key]) {
                let addresWrapper = document.createElement('div');
                addresWrapper.style.cssText = 'margin-left:40px'
                let adressKeyWrapper = document.createElement('span');
                let addresValueWrapper = document.createElement('span');
                adressKeyWrapper.innerText = `${addresKey} : `;
                addresValueWrapper.innerText = `${item[key][addresKey]}`;
                addresWrapper.append(adressKeyWrapper, addresValueWrapper);
                addressBlock.appendChild(addresWrapper);
            };
            keyValueWrapper.appendChild(addressBlock);
            userWrapper.appendChild(keyValueWrapper);
        } else {
            keyWrapper.innerText = `${key} : `;
            valueWrapper.innerText = `${item[key]}`;
            keyValueWrapper.append(keyWrapper, valueWrapper);
            userWrapper.appendChild(keyValueWrapper);
        };
    };
    document.body.appendChild(userWrapper)
}
// ---------------------------------------------------------------------------------------------

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують 
// тему контенту яка вказана в параграфі.
// створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), 
// який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

let heading = document.getElementsByTagName('h2');
let rulesItem = document.getElementsByClassName('rules')
let list = document.createElement('ul');
let content = document.getElementById('content');

for (let i = 0, j = 1; i < rulesItem.length; i++) {
    rulesItem[i].id = j;
    j++
}
let id = 1;
for (let item of heading) {
    let li = document.createElement('li');
    li.innerHTML = `<a href="#${id}"/>${item.innerText}`
    list.appendChild(li);
    id++
};
content.appendChild(list)
    // ---------------------------------------------------------------------------------------------------

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [{
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

let newWrapForRules = document.createElement('div');
for (let item of rules) {
    let ruleWrapper = document.createElement('div');
    ruleWrapper.innerHTML = `<h2>${item.title}</h2> <p>${item.body}</p>`;
    newWrapForRules.appendChild(ruleWrapper);
};
document.body.appendChild(newWrapForRules);
// ----------------------------------------------------------------------------------