export function trimText() {
    const textElements = document.querySelectorAll('.tabs__item-text-trim');
    if(!textElements) {return null}
    
    textElements.forEach(element => {
        const lineHeight = parseInt(getComputedStyle(element).lineHeight) || 20;
        const linesCount = element.scrollHeight / lineHeight;
        
        // Проверяем, есть ли уже кнопка
        const existingButton = element.nextElementSibling?.classList.contains('show-more-btn') 
            ? element.nextElementSibling 
            : null;
        
        if (linesCount > 3) {
            element.classList.add('trim-text');
            
            if (!existingButton) {
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
        } else {
            // Если текст стал короче - убираем класс и кнопку
            element.classList.remove('trim-text');
            if (existingButton) {
                existingButton.remove();
            }
        }
    });
}

// Инициализация
trimText();
window.addEventListener('resize', trimText);

// Если контент динамически меняется, вызывайте trimText() после изменений