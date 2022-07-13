//! Імпорт і налаштування скриптів

//? Базові скрипти ====================================================================================================================================
import isWebP from "./modules/_isWebP.js"; //? Перевірка підтримки webp зображень
import touchOrCursor from "./modules/_touchOrCursor.js"; //? Перевірка на touch або mouse івенти

//? Додаткові скрипти =================================================================================================================================
import headerMenu from "./modules/_headerMenu.js"; //? Меню шапки
import swiperSlider from "./modules/_swiperSlider.js" //? Слайдер Swiper

document.addEventListener('DOMContentLoaded', function() {

    isWebP();

    touchOrCursor();

    headerMenu();

    swiperSlider();
});