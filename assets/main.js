const elements = {
    header: document.querySelector('.container__header'),
    menu: document.querySelector('.container__content--menu'),
    main: document.querySelector('.container__content--main'),
    footer: document.querySelector('.container__footer')
};

function updateElementsSize() {
    for (let key in elements) {
        if (elements.hasOwnProperty(key)) {
            const element = elements[key];
            const width = element.offsetWidth;
            const height = element.offsetHeight;

            // Usuwamy poprzednie elementy sizeDisplay, jeśli istnieją
            const existingSizeDisplay = element.querySelector('.size-display');
            if (existingSizeDisplay) {
                element.removeChild(existingSizeDisplay);
            }

            // Tworzymy nowy element blokowy (np. div) dla wyświetlenia rozmiarów
            const sizeDisplay = document.createElement('div');
            sizeDisplay.className = 'size-display'; // Dodajemy klasę do stylizacji w CSS
            sizeDisplay.textContent = ` : w: ${width}px, h: ${height}px`;

            // Dodajemy nowy element blokowy do elementu kontenera
            element.appendChild(sizeDisplay);
        }
    }
}

// Nasłuchiwanie zdarzenia zmiany rozmiaru okna
window.addEventListener('resize', updateElementsSize);

// Pierwsza aktualizacja przy wczytaniu strony
updateElementsSize();