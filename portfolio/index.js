console.log(` TOTAL: 85 / 85 \n
1. Вёрстка соответствует макету. Ширина экрана 768px +48 \n
[x] блок <header> +6 \n
[x] секция hero +6 \n
[x] секция skills +6 \n 
[x] секция portfolio +6 \n
[x] секция video +6 \n
[x] секция price +6 \n
[x] секция contacts +6 \n
[x] блок <footer> +6  \n
2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +15 \n
[x] нет полосы прокрутки при ширине страницы от 1440рх до 768рх +5 \n
[x] нет полосы прокрутки при ширине страницы от 768рх до 480рх +5 \n
[x] нет полосы прокрутки при ширине страницы от 480рх до 320рх +5 \n
3. На ширине экрана 768рх и меньше реализовано адаптивное меню +22 \n
[x] при ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка +2 \n   
[x] при нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик +4 \n
[x] высота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана +4 \n
[x] при нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку +4 \n
[x] бургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений +2 \n
[x] ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +2 \n
[x] при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку +4 `);

const burger = document.querySelector('.main-nav-burger'),
  nav = document.querySelector('.main-nav'),
  navLinks = document.querySelectorAll('.main-nav__link'),
  logoLink = document.querySelector('.logo__icon');

const burgerToggle = () => {
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('burger-x');
  });
};

navLinks.forEach((element) =>
  element.addEventListener('click', () => {
    burger.classList.remove('burger-x');
    nav.classList.remove('nav-active');
  })
);

const logoBurgerRemover = () => {
  logoLink.addEventListener('click', () => {
    burger.classList.remove('burger-x');
    nav.classList.remove('nav-active');
  });
};

const portfolioBtn = document.querySelector('.portfolio__button'),
  portfolioImages = document.querySelectorAll('.portfolio__image');

burgerToggle();
logoBurgerRemover();
