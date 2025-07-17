// Бургер меню
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger-button')
    const dialog = document.getElementById('menu-dialog');

    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        dialog.classList.toggle('active');
    })

})  

// Слайдер
document.addEventListener('DOMContentLoaded', () => {
            let currentIndex = 0;
            const slides = document.querySelector('.slides');
            const slideCount = document.querySelectorAll('.slide').length;
            const gap = 27;
            let touchStartX = 0;
            let touchEndX = 0;

            if (!slides || slideCount === 0) {
                console.error('Слайдер или слайды не найдены');
                return;
            }

            const nextButton = document.querySelector('.next');
            const prevButton = document.querySelector('.prev');

            if (!nextButton || !prevButton) {
                console.error('Кнопки слайдера не найдены');
                return;
            }

            function updateSlidePosition() {
                const slideWidth = slides.querySelector('.slide').offsetWidth;
                const transformValue = -currentIndex * (slideWidth + gap);
                slides.style.transform = `translateX(${transformValue}px)`;
            }

            nextButton.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % slideCount;
                updateSlidePosition();
            });

            prevButton.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + slideCount) % slideCount;
                updateSlidePosition();
            });

            // Обработка свайпов
            slides.addEventListener('touchstart', (e) => {
                touchStartX = e.touches[0].clientX;
            });

            slides.addEventListener('touchmove', (e) => {
                touchEndX = e.touches[0].clientX;
            });

            slides.addEventListener('touchend', () => {
                const deltaX = touchEndX - touchStartX;
                const swipeThreshold = 50;

                if (deltaX > swipeThreshold) {
                    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
                    updateSlidePosition();
                } else if (deltaX < -swipeThreshold) {
                    currentIndex = (currentIndex + 1) % slideCount;
                    updateSlidePosition();
                }
            });

            // Обновление позиции слайдера при изменении размера окна
            window.addEventListener('resize', () => {
                updateSlidePosition();
            });

            // Инициализация позиции слайдера
            updateSlidePosition();
        });

document.addEventListener('DOMContentLoaded', () => {
            const dialog = document.querySelector('.info-window');
            const openButton = document.querySelector('.info__button');
            const closeButton = document.querySelector('.info-window__close');

            if (!dialog || !openButton || !closeButton) {
                console.error('Элементы попапа или кнопки не найдены');
                return;
            }

            // Открытие попапа
            openButton.addEventListener('click', () => {
                dialog.showModal();
            });

            // Закрытие попапа по клику на крестик
            closeButton.addEventListener('click', () => {
                dialog.close();
            });

            // Закрытие попапа по клику на оверлей
            dialog.addEventListener('click', (e) => {
                const dialogDimensions = dialog.getBoundingClientRect();
                if (
                    e.clientX < dialogDimensions.left ||
                    e.clientX > dialogDimensions.right ||
                    e.clientY < dialogDimensions.top ||
                    e.clientY > dialogDimensions.bottom
                ) {
                    dialog.close();
                }
            });
        });