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

const paphosEventsSlider = new Swiper('.paphos-events__slider', {
    // Стрелки
    navigation: {
        nextEl: '#paphos-events__slider-btn-next',
        prevEl: '#paphos-events__slider-btn-prev',
    },
    pagination: {
        el: '#paphos-events__pagination',
        clickable: true
      },
      centeredSlides: true,

    /*Отступ у карточек*/
    spaceBetween: 10,
    /*Показывать по n карточек*/
    slidesPerView: 1.2,
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
    // firstSlideToShow: 1,
    // initialSlide: 1,
    /*Автоматическое перелистывание*/
    // autoplay: {
    //     delay: 3000,
    //   },
    //   speed: 700,
    /*Брек-поинты*/
    breakpoints: {
        // 1220: {
        //     slidesPerView: 3,
        //     spaceBetween: 240,
        // },
        // 992: {
        //     slidesPerView: 3,
        //     spaceBetween: 140,
        // },
        // 768: {
        //     slidesPerView: 2,
        //     spaceBetween: 100,
        // },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        }
    },

});

const paphosInteriorSlider = new Swiper('.paphos-interior__slider', {
    // Стрелки
    navigation: {
        nextEl: '#paphos-interior__slider-btn-next',
        prevEl: '#paphos-interior__slider-btn-prev',
    },
    pagination: {
        el: '#paphos-interior__pagination',
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
    // firstSlideToShow: 1,
    // initialSlide: 1,
    /*Автоматическое перелистывание*/
    // autoplay: {
    //     delay: 3000,
    //   },
    //   speed: 700,
    /*Брек-поинты*/
    // breakpoints: {
    //     1220: {
    //         slidesPerView: 3,
    //         spaceBetween: 240,
    //     },
    //     992: {
    //         slidesPerView: 3,
    //         spaceBetween: 140,
    //     },
    //     768: {
    //         slidesPerView: 2,
    //         spaceBetween: 100,
    //     },
    //     568: {
    //         slidesPerView: 2,
    //         spaceBetween: 20,
    //     }
    // },

});

const foodsSlider = new Swiper('.foods-swiper', {
 slidesPerView: 1,
    spaceBetween: 130,
    loop: true,
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false, 
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      870: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },

});

const bowlingGallerySlider = new Swiper('.bowling-gallery-swiper', {
  slidesPerView: 1,
    spaceBetween: 60,
    loop: true,
    speed: 8000,
   
    autoplay: {
      delay: 0, 
      disableOnInteraction: false, 
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      870: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },

});



