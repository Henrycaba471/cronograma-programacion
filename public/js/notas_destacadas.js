const $notasSection = document.querySelector('.content-notes');
const doFragment = document.createDocumentFragment();

fetch('public/js/db.json')
    .then(response => response.json())
    .then(data => {
        data.notasDestacadas.forEach((nota) => {
            // Crear un nuevo elemento para cada nota
            const article = document.createElement('article');
            article.classList.add('note');

            // Construir el contenido HTML de la nota
            const noteHTML = `
                <h4 class="note-title">${nota.title}</h4>
                <img src="${nota.img}" alt="logo-${nota.title}" width="30">
                <p>
                    <strong>${nota.tema}:</strong>
                    ${nota.description}
                </p>
                <code>
                    ${nota.detail}
                </code> <br>
                <a href="${nota.ref}" target="_blank">Ver referencia</a>
            `;

            // Asignar el contenido HTML al artículo
            article.innerHTML = noteHTML;

            // Agregar el artículo al fragmento del documento
            doFragment.appendChild(article);
        });

        // Agregar el fragmento completo al contenedor de notas
        $notasSection.appendChild(doFragment);
    })
    .catch(error => console.error('Error al leer el archivo JSON:', error));
