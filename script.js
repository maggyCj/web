const photoUpload=document.getElementById('photoUpload');
const uploadButton=document.getElementById('uploadButton');
const gallery=document.getElementById('gallery');
const letterInput=document.getElementById('letterInput');
const sendLetterButton=document.getElementById('sendLetterButton');
const letters=document.getElementById('letters');

// Subir y guardar fotos
uploadButton.addEventListener('click', () => {
    const file = photoUpload.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const imgSrc = event.target.result;

            // Crear y mostrar la imagen
            const img = document.createElement('img');
            img.src = imgSrc;
            gallery.appendChild(img);

            // Guardar en localStorage
            let photos = JSON.parse(localStorage.getItem('photos')) || [];
            photos.push(imgSrc);
            localStorage.setItem('photos', JSON.stringify(photos));
        };
        reader.readAsDataURL(file);
    } else {
        alert('Por favor, selecciona una foto.');
    }
});

// Cargar fotos al abrir la página
document.addEventListener('DOMContentLoaded', () => {
    const photos = JSON.parse(localStorage.getItem('photos')) || [];
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo;
        gallery.appendChild(img);
    });
});


// Enviar y guardar cartas
sendLetterButton.addEventListener('click', () => {
    const text = letterInput.value.trim();
    if (text) {
        const p = document.createElement('p');
        p.textContent = text;
        letters.appendChild(p);

        // Guardar en localStorage
        let savedLetters = JSON.parse(localStorage.getItem('letters')) || [];
        savedLetters.push(text);
        localStorage.setItem('letters', JSON.stringify(savedLetters));

        // Limpiar el textarea
        letterInput.value = '';
    } else {
        alert('Por favor, escribe una carta.');
    }
});

// Cargar cartas al abrir la página
document.addEventListener('DOMContentLoaded', () => {
    const savedLetters = JSON.parse(localStorage.getItem('letters')) || [];
    savedLetters.forEach(letter => {
        const p = document.createElement('p');
        p.textContent = letter;
        letters.appendChild(p);
    });
});