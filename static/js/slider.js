let index = 0;
let imgElement = document.getElementById("image");
let timer =  4000;
let images = [
    "https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
    "https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
    "https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg",
    "https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg",
];
let next = document.querySelector('.next');
let back = document.querySelector('.back');

imgElement.src = images[index]; // Establece la primera imagen

// Función para cambiar de imagen
function changeImage(direction) {
    if (direction === 'next') {
        index = (index + 1) % images.length; // Avanza al siguiente índice circularmente
    } else if (direction === 'back') {
        index = (index - 1 + images.length) % images.length; // Retrocede al índice anterior circularmente
    }
    imgElement.src = images[index]; // Cambia la imagen
}
next.addEventListener('click', () => {
    changeImage('next');
});

// Evento al hacer clic en el botón "Back"
back.addEventListener('click', () => {
    changeImage('back');
});

// Función para iniciar el cambio automático de imágenes cada 4 segundos
function autoChangeImage() {
    setInterval(() => {
        changeImage('next');
    }, timer);
}

// Inicia el cambio automático de imágenes
autoChangeImage();

// Variables para el desplazamiento
let isDragging = false;
let startPosX = 0;


// Evento al presionar el mouse sobre la imagen
imgElement.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPosX = e.clientX;
});

// Evento al soltar el mouse
imgElement.addEventListener('mouseup', () => {
    isDragging = false;
});

// Evento al mover el mouse
imgElement.addEventListener('mousemove', (e) => {
    if (isDragging) {
        let deltaX = e.clientX - startPosX;
        if (deltaX > 50) { // Si el usuario desliza hacia la derecha
            changeImage('back'); // Cambia a la imagen anterior
            isDragging = false;
        } else if (deltaX < -50) { // Si el usuario desliza hacia la izquierda
            changeImage('next'); // Cambia a la siguiente imagen
            isDragging = false;
        }
    }
});
