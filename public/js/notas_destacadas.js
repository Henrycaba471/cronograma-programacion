const $notasSection = document.querySelector('.content-notes');
const doFragment = document.createDocumentFragment();
const btnSearch = document.getElementById('btn-search');

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
                <img src="${nota.img}" alt="logo-${nota.title}" width="45">
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


const searchTheme = () => {
    const wordToSearch = document.getElementById('search').value;

    fetch('public/js/db.json')
        .then(response => response.json())
        .then(data => {
            let notesDest = data.notasDestacadas;
            let notesNode = data.notasNode;
            let notesJava = data.notasJava;
            let notesHTML = data.notasHTML;
            let notesCSS = data.notasCSS;
            let notesReact = data.notasReact;
            let notesJavaScript = data.notasJavaScript;

            const resultados = notesDest.filter((nota) => {
                // Convierte a minúsculas para hacer la búsqueda insensible a mayúsculas
                const temaEnMinuscula = nota.tema.toLowerCase();
                const descripcionEnMinuscula = nota.description.toLowerCase();
                // Realiza la búsqueda en el tema y la descripción
                return temaEnMinuscula.includes(wordToSearch) || descripcionEnMinuscula.includes(wordToSearch);
            });

            if(resultados.length === 0){
                $notasSection.innerHTML = '';
                const h1 = document.createElement('h1');
                h1.innerHTML = `No hay resultados`
                $notasSection.appendChild(h1);
                return
            }

            resultados.forEach((nota) => {
                $notasSection.innerHTML = '';
                // Crear un nuevo elemento para cada nota
                const article = document.createElement('article');
                article.classList.add('note');

                // Construir el contenido HTML de la nota
                const noteHTML = `
                <h4 class="note-title">${nota.title}</h4>
                <img src="${nota.img}" alt="logo-${nota.title}" width="45">
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

            //console.log(notesDest);

            // Agregar el fragmento completo al contenedor de notas
            $notasSection.appendChild(doFragment);
        })
        .catch(error => console.error('Error al leer el archivo JSON:', error));
}

btnSearch.addEventListener('click', searchTheme);