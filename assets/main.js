// Tworzę elementy paragrafu i tekstowe
const p = document.createElement("p");
const node = document.createTextNode("");

// Dodaję początkowy tekst do węzła tekstowego
p.appendChild(node);

// Dodaję paragraf do dokumentu
document.body.appendChild(p);

// Funkcja do aktualizacji rozmiarów i tekstu węzła
function updateWindowSize() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // Aktualizacja tekstu węzła
    node.textContent = `width: ${width}, height: ${height}`;

    //console.log(`Aktualna szerokość: ${width}px, aktualna wysokość: ${height}px`);
}

// Nasłuchiwanie zdarzenia zmiany rozmiaru okna
window.addEventListener('resize', updateWindowSize);

// Wywołuję funkcję updateWindowSize, aby zainicjować tekst węzła
updateWindowSize();