// ------------------------------------------------------------------------------------------------
// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let divelement = document.createElement('div');
divelement.classList.add('wrap', 'collaple', 'alpha', 'bata');
divelement.style.cssText = 'width : 400px; background-color: blue; height : 400px;margin:20px'
document.body.appendChild(divelement);
document.body.appendChild(divelement.cloneNode(true));
// --------------------------------------------------------------------------------------------------

// - Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає 
// його до блоку .menu
// Завдання робити через цикли.

let array = ['Main', 'Products', 'About us', 'Contacts'];
let ulElement = document.createElement('ul');
for (item of array) {
    let liElement = document.createElement('li');
    liElement.innerText = item;
    ulElement.appendChild(liElement);
};
document.getElementsByClassName('menu')[0].appendChild(ulElement);
// ------------------------------------------------------------------------------------------------

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
let divCoursesElements = document.createElement('div');
divCoursesElements.style.cssText = 'display:flex; max-width:900px; margin:10px auto; flex-wrap: wrap; justify-content: center; background-color: purple; box-sizing:border-box;column-gap:10px; row-gap:10px; padding:10px 0 10px 0';
for (course of coursesAndDurationArray) {
    let divCourseElement = document.createElement('div');
    let titleOfCourse = document.createElement('h2');
    let subTitleOfCourse = document.createElement('p');

    divCourseElement.style.cssText = 'width:400px;padding:20px;text-align:center; border: 1px solid black; box-sizing:border-box;background-color: rgb(255 255 255 / 19%);';
    titleOfCourse.style.cssText = 'font-size:24px;color:red';
    subTitleOfCourse.style.cssText = 'text-decoration: underline;';

    titleOfCourse.innerText = course.title;
    subTitleOfCourse.innerText = `monthDuration: ${course.monthDuration}`;

    divCourseElement.append(titleOfCourse, subTitleOfCourse);
    divCoursesElements.appendChild(divCourseElement);
};
document.body.appendChild(divCoursesElements);
// -------------------------------------------------------------------------------------------------

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

let divCoursesElementClone = divCoursesElements.cloneNode();
for (course of coursesAndDurationArray) {
    let courseElement = document.createElement('div');
    courseElement.className = 'item';
    let courseTitle = document.createElement('h1');
    courseTitle.className = 'heading';
    let courseInfo = document.createElement('p');
    courseInfo.className = 'description';

    courseTitle.innerText = course.title;
    courseInfo.innerText = course.monthDuration;

    courseElement.append(courseTitle, courseInfo);
    divCoursesElementClone.appendChild(courseElement);
};
document.body.appendChild(divCoursesElementClone);
// -----------------------------------------------------------------------------------