/*pestañas */
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');
   

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remover la clase 'active' de todas las pestañas y contenidos
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Agregar la clase 'active' a la pestaña clickeada
            tab.classList.add('active');

            // Mostrar el contenido correspondiente
            const target = tab.getAttribute('data-tab');
            const targetContent = document.getElementById(target);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});



// JavaScript para añadir interactividad al apartado "Más sobre la creación de proyectos y tareas"

document.addEventListener('DOMContentLoaded', () => {
    const infoItems = document.querySelectorAll('.more-infor');
    console.log(infoItems);

    
});

