// ========================= Подключение слайдера =============================================
//подключение в gulp 
import Swiper from 'swiper/bundle';
import "swiper/swiper-bundle.css";


const paphosPrimaryslider = new Swiper('.paphos__primary-slider', {
    // Стрелки
    navigation: {
        nextEl: '',
        prevEl: '',
    },
    pagination: {
        el: '',
        clickable: true
      },
      centeredSlides: true,

    /*Отступ у карточек*/
    spaceBetween: 20,
    /*Показывать по n карточек*/
    slidesPerView: 1,
    /* При достижении конца, перепрыгнуть в начало */
    // rewind: true,
    /*Увеличение при наведении курсора мыши */
    // zoom: true,
    /*Ленивая подгрузка */
    // lazy: true,
    /*Бесконечная прокрутка */
    // loop: true,
    /*Ориентация */
    // direction: 'vertical',
    /*Авто высота*/
    // autoHeight: true,
    /*иконка захвата при наведении на слайд*/
    grabCursor: true,
    firstSlideToShow: 1,
    initialSlide: 1,
    /*Автоматическое перелистывание*/
    autoplay: {
        delay: 3000,
      },
      speed: 700,
    /*Брек-поинты*/
    breakpoints: {
        1220: {
            slidesPerView: 3,
            spaceBetween: 240,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 140,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 100,
        },
        568: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    },

});



