 // nav-aside 
 document.querySelector(".nav-aside__button").addEventListener("click", event => {
    document.querySelector(".nav-aside__body").classList.toggle("nav-aside__body_active");
 });


// Заполнение aside главами 
const listSubContent = document.querySelectorAll(".list-manual__header");
const navAsideList =  document.querySelector(".nav-aside__list");
for (let i = 0; i < listSubContent.length; i++) {
    const item = listSubContent[i];

    const li = document.createElement("li");
    const chapter = document.createElement("h4");
    const title = document.createElement("div");

    li.className = "nav-aside__item";
    chapter.className = "nav-aside__chapter";
    title.className = "nav-aside__title";

    chapter.innerHTML = item.children[0].firstElementChild.innerHTML;
    title.innerHTML = item.children[1].innerHTML;
    li.append(chapter);
    li.append(title);

    navAsideList.append(li);
}


// Пронумирование списков подзаголовков
const listManual = document.querySelectorAll("[data-number]");

let i = 0;
let item = 1;
let j = 0;

while (listManual[j]) {
    if (listManual[j].dataset.number) {
        i++;
        item = 1;
    }

    listManual[j].innerHTML = `${i}.${item}`;
    item++;
    j++;
}




const menuIcon = document.querySelector(".logo-header__menu-icon");
const moveMenu = document.querySelector(".tablet-menu");

menuIcon.addEventListener("click", event => {
    menuIcon.classList.toggle("menu-icon_active");
    moveMenu.classList.toggle("tablet-menu_active");
});





const searchIcon = document.querySelector(".search-icon");
const highlightIcon = document.querySelector(".highlight-icon");
const userIcon = document.querySelector(".user-icon");
const headerSearch = document.querySelector(".header__search");

let isActiveSearch = false;
document.addEventListener("click", (event) => {
    const { target } = event;
    
    if (target.closest(".search-icon") && !isActiveSearch) 
        activeSearchOnHeader();
    else if (!headerSearch.contains(target) && isActiveSearch) 
        activeSearchOnHeader();

});

function activeSearchOnHeader() {
    isActiveSearch = !isActiveSearch;
    searchIcon.classList.toggle("_active");
    headerSearch.classList.toggle("search-header");
    
    highlightIcon.classList.toggle("_close");
    userIcon.classList.toggle("_close");
}



