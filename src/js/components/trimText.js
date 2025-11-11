export function trimText() {
    const textElements = document.querySelectorAll('.tabs__item-text-trim');
    if(!textElements) {return null}
    
    textElements.forEach(element => {
        // Удаляем существующую кнопку перед проверкой
        const existingButton = element.nextElementSibling?.classList.contains('show-more-btn') 
            ? element.nextElementSibling 
            : null;
        if (existingButton) {
            existingButton.remove();
        }
        element.classList.remove('trim-text');
        
        // Проверяем высоту после сброса стилей
        const clientHeight = element.clientHeight;
        const scrollHeight = element.scrollHeight;
        const lineHeight = parseInt(getComputedStyle(element).lineHeight) || 20;
        
        // Более точная проверка - если контент превышает 3.5 строки
        if (scrollHeight > clientHeight || (scrollHeight / lineHeight) > 3.5) {
            element.classList.add('trim-text');
            
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'btn show-more-btn';
            button.textContent = 'Показать все';
            
            button.addEventListener('click', function() {
                element.classList.toggle('trim-text');
                this.textContent = element.classList.contains('trim-text') 
                    ? 'Показать все' 
                    : 'Скрыть';
            });
            
            element.after(button);
        }
    });
}

// Инициализация
setTimeout(trimText, 100);
window.addEventListener('resize', trimText);

document.querySelectorAll('.tabs__title').forEach(title => {
    title.addEventListener('click', function() {
        setTimeout(trimText, 150); // Даем больше времени на переключение контента
    });
});