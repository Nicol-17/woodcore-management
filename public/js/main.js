const tareaSinHacer = document.getElementById("sinHacer");
const tareasEnProceso = document.getElementById("Haciendo");
const tareasRealizadas = document.getElementById("taskHecho");
// menú container dashboard
const linkProyectos = document.getElementById("crearProyectos");
const linkTareas = document.getElementById("crearTareas");
// Código del archivo tareas.js para mostrar las tareas



///////////////////////////////////////////////////////////////////////////////////////////
// FUNCIONALIDAD PARA OBTENER LAS TAREAS DE LA BASE DE DATOS Y MOSTRARLAS EN PANTALLA
async function fetchTareas() {
    let res = await fetch("http://localhost:8080/tasks")
        .then(tareas => tareas.json())
        .then(tareas => {

            // Recorriendo cada uno de los elementos del conjunto de tareas
            tareas.forEach(task => {

                // Creando y asignando cada una de las propiedades de la tarea por cada una de las tareas 
                const tarea_id = task.tarea_id;
                const nombre_tarea = task.nombre_task; 
                const prioridad = task.prioridad;
                const resumen = task.des_tasks; 
                const encargado = task.encargado; 
                const sprint_tarea = task.sprint_task; 
                


                const fecha = new Date(sprint_tarea);
                let año = fecha.getFullYear();
                let mes = fecha.getMonth() + 1;
                let dia = fecha.getDate();

                const sprintFormateado = `${dia}/${mes}/${año}`;


                // prueba
                // console.log(sprint);

                // creación de los elmentos para las tareas

                // Contenedor padre principal de la tarea
                const contenedorTarea = document.createElement("div");

                // Parte del head de la tarea
                const containerHeadTask = document.createElement("div");
                const imgEncargado = document.createElement("img");
                const containerNombre = document.createElement("div");
                const nombreEncargado = document.createElement("p");
                const legendEncargado = document.createElement("p");
                const containerSprintTask = document.createElement("div");
                const legendFechaTarea = document.createElement("p");
                const sprintTarea = document.createElement("p");
                const botonEditarTarea = document.createElement("button");
                const iconEditarTarea = document.createElement("img");

                // Parte del contenido de la tarea
                const containerContenidoTarea = document.createElement("div");
                const containerNombreTarea = document.createElement("div");
                const nombreTarea = document.createElement("p");
                const estadoActividad = document.createElement("p");
                const descripcionTarea = document.createElement("p");
                const boldTextDescripcion = document.createElement("b");
                const containerPrioridad = document.createElement("div");
                const legendPrioridadTarea = document.createElement("p");
                const boldTextPrioridad = document.createElement("b");
                const category = document.createElement("p");

                // Parte del progreso de los estados de la tarea
                const containerStates = document.createElement("div");
                const firstState = document.createElement("div");
                const secondtState = document.createElement("div");
                const thirdtState = document.createElement("div");



                // Definiendo los atributos y clases para caada elemento
                contenedorTarea.classList.add("task", "d-flex", "flex-column", "rounded-top", "me-2", "mb-2");
                contenedorTarea.setAttribute("tarea_id", tarea_id);
                // console.log(contenedorTarea.getAttribute("id"));
                contenedorTarea.setAttribute("draggable", true);

                // Definición de las clases del container head de la tarea
                containerHeadTask.classList.add("container-heading-task", "d-flex", "w-100", "align-items-center");
                imgEncargado.classList.add("rounded-circle", "nav__img--avatar", "ms-2");
                containerNombre.classList.add("d-flex", "flex-column", "ms-1", "align-items-start", "w-50");
                nombreEncargado.classList.add("mb-0", "pt-2", "fw-bold");
                legendEncargado.classList.add("t-encargado");
                containerSprintTask.classList.add("d-flex", "flex-column", "align-items-end", "me-3", "w-50");
                legendFechaTarea.classList.add("mb-0", "mt-2", "t-fecha");
                sprintTarea.classList.add("fecha", "me-1");
                botonEditarTarea.classList.add("btn-abrir-form-edit-tasks", "align-self-start");
                iconEditarTarea.classList.add("edit-task-icon");

                // Definición de las clases del contenido de la tarea
                containerContenidoTarea.classList.add("desc-task", "d-flex", "flex-column", "justify-content-center", "ms-2", "mt-2");
                containerNombreTarea.classList.add("d-flex", "mb-2", "mt-2");
                nombreTarea.classList.add("mb-0", "fw-bold", "fs-5", "mt-3", "name-task");
                estadoActividad.classList.add("mb-0", "text-wrap", "bg-success", "rounded-pill", "text-center", "state", "ms-1", "align-self-center", "me-1", "flex-shrink-0");
                descripcionTarea.classList.add("mb-2");
                containerPrioridad.classList.add("container-prioridad", "d-flex");
                legendPrioridadTarea.classList.add("mb-1", "me-2");
                category.classList.add("category", "text-wrap", "w-50", "rounded-pill", "text-center", "mb-0");


                // Definición de las clases de los estados de progreso de las tareas
                containerStates.classList.add("states", "d-flex", "justify-content-between", "align-items-end", "ms-3", "mt-3");
                firstState.classList.add("first-state", "rounded-pill", "w-50", "me-1");
                secondtState.classList.add("second-state", "rounded-pill", "w-50", "me-1");
                thirdtState.classList.add("third-state", "rounded-pill", "w-50");




                // Agregando el contenido de las tareas
                // Agregando el contenido a la parte del head de la tarea
                imgEncargado.setAttribute("src", "../img/persona06.jpg");
                nombreEncargado.innerText = encargado;
                legendEncargado.innerText = "Encargado";
                legendFechaTarea.innerText = "Fecha límite";
                sprintTarea.innerText = sprintFormateado;
                iconEditarTarea.setAttribute("src", "../img/edit.png");

                // Agregando el contendio del contenido de la tarea
                nombreTarea.innerText = nombre_tarea;
                estadoActividad.innerText = "Activa";
                boldTextDescripcion.innerText = "Descripción: ";
                descripcionTarea.innerHTML = resumen;
                boldTextPrioridad.innerText = "Prioridad:";
                category.innerText = prioridad;
            

                // Agregando los elementos a la tarea y al DOM
                contenedorTarea.appendChild(containerHeadTask);
                contenedorTarea.appendChild(containerContenidoTarea);
                contenedorTarea.appendChild(containerStates);

                // Agregando los elementos al head de la tarea                
                containerHeadTask.appendChild(imgEncargado);
                containerHeadTask.appendChild(containerNombre);
                containerNombre.appendChild(nombreEncargado);
                containerNombre.appendChild(legendEncargado);
                containerHeadTask.appendChild(containerSprintTask);
                containerSprintTask.appendChild(legendFechaTarea);
                containerSprintTask.appendChild(sprintTarea);
                containerHeadTask.appendChild(botonEditarTarea);
                botonEditarTarea.appendChild(iconEditarTarea);

                // Agregando los elementos al contenido de la tarea
                containerContenidoTarea.appendChild(containerNombreTarea);
                containerNombreTarea.appendChild(nombreTarea);
                containerNombreTarea.appendChild(estadoActividad);
                descripcionTarea.insertAdjacentElement("afterbegin", boldTextDescripcion);
                containerContenidoTarea.appendChild(descripcionTarea);
                containerContenidoTarea.appendChild(containerPrioridad);
                legendPrioridadTarea.appendChild(boldTextPrioridad);
                containerPrioridad.appendChild(legendPrioridadTarea);
                containerPrioridad.appendChild(category);

                // Agregando los elementos a la barra de progreso de states
                containerStates.appendChild(firstState);
                containerStates.appendChild(secondtState);
                containerStates.appendChild(thirdtState);

                // Agregando la tarea el DOM
                tareaSinHacer.appendChild(contenedorTarea);

            });

            obtenerYCrearEventosTareas();
            aplicarPrimerEstado();
            abrirModalEditTasks();

        })
        .catch(err => console.log("error al cargar las tareas: ", err))

}
fetchTareas()


///////////////////////////////////////////////////////////////////////////////////////////
// Funcionalidad para la partel nav y visualización de los proyectos

const verTareas = document.getElementById("verTareas");
const verProyectos = document.getElementById("verProyectos");
const containerDashboard = document.getElementById("container-dashboard");
const containerDashboardProyectos = document.getElementById("container-dashboard-projects");
const titleDashboard = document.getElementById("title-dashboard");
// const stringClasesContainerDashboard = containerDashboard.className;
// const arrayClasesContainerDashboard = stringClasesContainerDashboard.split(" ");
// const claseDFlex = arrayClasesContainerDashboard.includes("d-flex");



// contenedor principal de cada proyecto

const containerProject = document.createElement("div");

const botonEditarProyecto = document.createElement("button");



// contenedor para el img del aside
const containerImgCover = document.createElement("div");
const content = document.createElement("div");
const textImgCover = document.createElement("a");
// container par el contenedor del progreso, nombre y descripción
const containerInfoProject = document.createElement("div");
// container de los avatars de las personas 
const containerEquipo = document.createElement("div");

// container de avatar individual
const containerPersona = document.createElement("div");
const imgPersona = document.createElement("img");
const legendPersona = document.createElement("p");

// container para la descripción, progreso, nombre y estado
const containerMainInfo = document.createElement("div");
// container para el nobre y estado del proyecto
const containerNameProject = document.createElement("div");
const nameProject = document.createElement("p");
const stateProject = document.createElement("p");



// container para el progreso de cada proyecto
const containerProgressProject = document.createElement("div");
const legendProgress = document.createElement("p");
const progress = document.createElement("div");


// FUNCIONALIDAD PARA OBTENER LOS PROYECTOS DE LA BASE DE DATOS Y MOSTRARLAS EN PANTALLA
async function mostrarProyectos() {
    const res = await fetch("http://localhost:8080/project")
        .then(proyectos => proyectos.json())
        .then(proyectos => {
            console.log(proyectos);

            proyectos.forEach(proyecto => {
                console.log("Esta obteniendo:", proyecto);

                const id_proyecto = proyecto.id_proyecto;
                const nombre_proyecto = proyecto.nombre_proyecto;
                const prioridad = proyecto.prioridad;
                const sprint_inicio = proyecto.sprint_inicio;
                const sprint_final = proyecto.sprint_final;
                const encargado_proyecto = proyecto.encargado_proyecto;



                // Contenedor principal del proyecto
                const containerProject = document.createElement("div");
                containerProject.classList.add("proyecto", "container-project", "d-flex", "ms-4", "mt-3", "position-relative");
                containerProject.setAttribute("id_proyecto", id_proyecto);

                // Contenedor de la imagen de portada
                const containerImgCover = document.createElement("div");
                containerImgCover.classList.add("container-img-cover", "me-3");

                // Imagen de portada
                const imgCover = document.createElement("img");
                imgCover.classList.add("img-fluid", "rounded");

                // Enlace de "Ver detalles del proyecto"
                const textImgCover = document.createElement("a");
                textImgCover.classList.add("text-img-cover", "text-white");
                textImgCover.href = "#";
                textImgCover.innerText = "Ver detalles del proyecto";

                // Agregar imagen y enlace al contenedor de imagen
                containerImgCover.appendChild(imgCover);
                containerImgCover.appendChild(textImgCover);

                // Contenedor de información del proyecto
                const containerInfoProject = document.createElement("div");
                containerInfoProject.classList.add("container-info-project", "flex-grow-1");

                // Contenedor para nombre y estado
                const containerNameState = document.createElement("div");
                containerNameState.classList.add("d-flex", "align-items-center", "p-2");

                // Nombre del proyecto
                const nameProject = document.createElement("h4");
                nameProject.classList.add("name-project", "fw-bold", "me-2");
                nameProject.innerText = nombre_proyecto;

                // Estado del proyecto
                const stateProject = document.createElement("span");
                stateProject.classList.add("state-project", "bg-success", "rounded-pill", "text-white", "px-2", "py-1");
                stateProject.innerText = "Activo";

                // Agregar nombre y estado al contenedor de información
                containerNameState.appendChild(nameProject);
                containerNameState.appendChild(stateProject);
                containerInfoProject.appendChild(containerNameState);

                // Prioridad del proyecto
                const prioridadProject = document.createElement("p");
                prioridadProject.classList.add("prioridad-project", "text-white");
                prioridadProject.innerText = "Prioridad: " + prioridad;

                // Sprint inicio
                const sprintInicio = document.createElement("p");
                sprintInicio.classList.add("sprint-inicio", "text-white");
                sprintInicio.innerText = "Fecha Inicial: " + sprint_inicio;

                // Sprint final
                const sprintFinal = document.createElement("p");
                sprintFinal.classList.add("sprint-final", "text-white");
                sprintFinal.innerText = "Fecha Final: " + sprint_final;



                // Encargado del proyecto
                const encargadoProject = document.createElement("p");
                encargadoProject.classList.add("encargado-project", "text-white");
                encargadoProject.innerText = "Encargado: " + encargado_proyecto;

                //  Botón de editar
                const botonEditarProyecto = document.createElement("button");
                botonEditarProyecto.classList.add("btn-abrir-edit-project", "mt-2", "position-absolute", "top-0", "end-0");

                // Ícono dentro del botón
                const iconEditarProyecto = document.createElement("img");
                iconEditarProyecto.classList.add("edit-project-icon");
                iconEditarProyecto.setAttribute("src", "../img/edit.png");

                botonEditarProyecto.appendChild(iconEditarProyecto);

                // Agregar prioridad y encargado al contenedor de información
                containerInfoProject.appendChild(botonEditarProyecto);
                botonEditarProyecto.appendChild(iconEditarProyecto);
                containerInfoProject.appendChild(prioridadProject);
                containerInfoProject.appendChild(sprintInicio);
                containerInfoProject.appendChild(sprintFinal);
                containerInfoProject.appendChild(encargadoProject);

                // Agregar contenedores al contenedor principal
                containerProject.appendChild(containerImgCover);
                containerProject.appendChild(containerInfoProject);

                // Agregar el proyecto al dashboard
                containerDashboardProyectos.appendChild(containerProject);
                abrirModalEditProjects(proyecto.id_proyecto);
            });
        });
}


///////////////////////////////////////////////////////////////////////////////////////////
// FUNCIONALIDAD PARA DEFINIR EL FONDO DEL PRIMER ESTADO DE CADA TAREA
function aplicarPrimerEstado() {
    const tasks = document.querySelectorAll(".task");

    tasks.forEach(tarea => {

        // para los estados de cada una de las tareas
        const firstState = tarea.children[2].children[0];
        const secondState = tarea.children[2].children[1];
        const thirdState = tarea.children[2].children[2];

        firstState.classList.add("bg-primary");
    })


}



///////////////////////////////////////////////////////////////////////////////////////////
// FUNCIONALIDAD PARA CREAR EL EFECTO DE DRAG AND DROP EN CADA UNA DE LAS TAREAS

async function obtenerYCrearEventosTareas() {
    try {
        const tareas = document.querySelectorAll(".task");

        const arrayTareas = Array.from(tareas);

        // Pruba de código
        // console.log(arrayTareas);

        // total de tareas
        const tareasTotales = arrayTareas.length;

        //  Asignando el data id a cada una de las tareas del arrayTareas
        arrayTareas.forEach((tarea, indice) => {
            tarea.id = indice;
        })

        // Código para hacer que las tareas sean drag and drop 
        // para cuando inicia el arrastre en cada uno de los contenedores y para indentificar que tarea se agrega a qué container
        tareaSinHacer.addEventListener("dragstart", function (e) {
            e.dataTransfer.setData("id", e.target.id);
        })

        tareasEnProceso.addEventListener("dragstart", function (e) {
            e.dataTransfer.setData("id", e.target.id);

        })

        tareasRealizadas.addEventListener("dragstart", function (e) {
            e.dataTransfer.setData("id", e.target.id);

        })


        //  para los eventos dragover de los contenedores
        tareaSinHacer.addEventListener("dragover", function (e) {
            e.preventDefault();
        })
        tareasEnProceso.addEventListener("dragover", function (e) {
            e.preventDefault();
        })
        tareasRealizadas.addEventListener("dragover", function (e) {
            e.preventDefault();
        })


        // para los eventos drop de los contenedores
        tareaSinHacer.addEventListener("drop", function (e) {
            e.stopImmediatePropagation();

            const id = e.dataTransfer.getData("id");
            e.target.appendChild(document.getElementById(id));
            // console.log(id);
            estadosTareas()
        })

        tareasEnProceso.addEventListener("drop", function (e) {
            e.stopImmediatePropagation();

            const id = e.dataTransfer.getData("id");
            e.target.appendChild(document.getElementById(id));
            // console.log(id);
            estadosTareas()
        })

        tareasRealizadas.addEventListener("drop", function (e) {
            e.stopImmediatePropagation();

            const id = e.dataTransfer.getData("id");
            e.target.appendChild(document.getElementById(id));
            // console.log(id);
            estadosTareas()
        })




    } catch (err) {
        console.log(err);
    }
}



///////////////////////////////////////////////////////////////////////////////////////////
// FUNCIONALIDAD DE LA BARRA DE PROGRESO DE LAS TAREAS

async function estadosTareas() {
    const tasks = document.querySelectorAll(".task");
    const containerTareasSinHacer = document.querySelector(".sinHacer");
    const containerTareasEnProceso = document.querySelector(".Haciendo");
    const containerTareasRealizadas = document.querySelector(".taskHecho");


    const hijosContainerTareasSinHacer = containerTareasSinHacer.children;
    const hijosContainerTareasEnProceso = containerTareasEnProceso.children;
    const hijosContainerTareasRealizadas = containerTareasRealizadas.children;


    // console.log(hijosContainerTareasSinHacer);
    // console.log(hijosContainerTareasEnProceso);
    // console.log(hijosContainerTareasRealizadas);

    tasks.forEach((tarea, indice) => {
        // Prueba de código para recorrer cada tarea
        // console.log(tarea)

        // Adquirir los elementos padre y su clase
        const elementoPadre = tarea.parentNode;
        const idElementoPadre = elementoPadre.id;

        // prueba para ver el id del elemento padre de cada tarea
        // console.log(idElementoPadre);

        // para los estados de cada una de las tareas
        const firstState = tarea.children[2].children[0];
        const secondState = tarea.children[2].children[1];
        const thirdState = tarea.children[2].children[2];



        // Hacer la validación para aplicar el fondo a cada uno de los estados en base a si contiene o no la clase "bg-primary";
        //para las clases de cada una de las clases de los estados de la tarea
        const stringClasesFirstState = firstState.className;
        const stringClasesSecondtState = secondState.className;
        const stringClasesThirdtState = thirdState.className;
        //conversión de las clases de los estados a array
        const arrayClasesFirstState = stringClasesFirstState.split(" ");
        const arrayClasesSecondState = stringClasesSecondtState.split(" ");
        const arrayClasesThirdState = stringClasesThirdtState.split(" ");
        // Para verificar que existe la clase dentro del array de clases de cada uno de los estados
        const claseBgPrimaryFirstState = arrayClasesFirstState.includes("bg-primary");
        const claseBgPrimarySecondState = arrayClasesSecondState.includes("bg-primary");
        const claseBgPrimaryThirdState = arrayClasesThirdState.includes("bg-primary");


        // console.log(getComputedStyle(firstState).getPropertyValue("background-color"))
        console.log(idElementoPadre === "sinHacer");


        // condicional para las tareas que se encuentren en el primer elemento padre (Tareas sin hacer)
        if (idElementoPadre === "sinHacer" && claseBgPrimarySecondState && claseBgPrimaryThirdState) {

            secondState.classList.remove("bg-primary");
            thirdState.classList.remove("bg-primary");

        } else if (idElementoPadre === "sinHacer" && claseBgPrimaryThirdState) {

            thirdState.classList.remove("bg-primary");

        } else if (idElementoPadre === "sinHacer" && claseBgPrimarySecondState) {

            secondState.classList.remove("bg-primary");

        } else if (idElementoPadre === "Haciendo" && claseBgPrimaryThirdState) {

            thirdState.classList.remove("bg-primary");
            console.log("elemento padre: Tareas en proceso");


        } else if (idElementoPadre === "Haciendo" && claseBgPrimarySecondState === false) {

            secondState.classList.add("bg-primary");


        } else if (idElementoPadre === "taskHecho" && claseBgPrimarySecondState === false && claseBgPrimaryThirdState === false) {

            secondState.classList.add("bg-primary");
            thirdState.classList.add("bg-primary");


        } else if (idElementoPadre === "taskHecho") {

            thirdState.classList.add("bg-primary");

        }
    })

    // Prueba de código para verificar la obtención de las tareas
    // console.log(tasks)
}





///////////////////////////////////////////////////////////////////////////////////////////
// Funcionalidad pra el form de crear tareas

const abrirModalForm = document.querySelectorAll(".abrir-form");
const cerrarModalForm = document.querySelectorAll("#cerrar-form");
const modalForm = document.querySelectorAll("#modal-form")

cerrarModalForm.forEach(elemento => {
    modalForm.forEach(form => {
        const Formtask = form;

        abrirModalForm.forEach(elemento => {
            elemento.addEventListener("click", () => {
                Formtask.showModal();
            })
        })

        elemento.addEventListener("click", () => {
            Formtask.close()
        })
    })
})


// para enviar los datos al backend
modalForm.forEach(form => {
    const formCreatTask = form;

    formCreatTask.addEventListener("submit", async (e) => {
        // e.preventDefault();

        // Verifica si los campos existen y están obteniendo valores correctos
        // console.log(document.querySelector('#nombre_task').value);
        // console.log(document.querySelector('#prioridad').value);
        // console.log(document.querySelector('#des_tasks').value);
        // console.log(document.querySelector('#encargado').value);
        // console.log(document.querySelector('#sprint_task').value);


        const res = await fetch("http://localhost:8080/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre_task: document.querySelector('#nombre_task').value,
                prioridad: document.querySelector('#prioridad').value,
                resumen: document.querySelector('#des_tasks').value,
                encargado: document.querySelector('#encargado').value,
                sprint_task: document.querySelector('#sprint_task').value,
            })
        });
        
        console.log('Respuesta:', res);
    });
});


//Funcionalidad para abir y cerrar el form de editar tareas

function abrirModalEditTasks() {
    // Obtener los botones para abrir y cerrar cada modal
    const abrirModalFormEditTasks = document.querySelectorAll(".btn-abrir-form-edit-tasks"); 
    const cerrarModalFormEditTasks = document.querySelectorAll("#close-edit-form");
    const modalEditTaskForm = document.querySelectorAll("#modal-edit-task-form");
    const formEditTask = document.querySelectorAll(".form-edit-tasks");

    // Crear las variables para guardar los inputs y los elementos del formulario
    const inputIdTask = formEditTask[0].querySelector("input[name='id_task']"); 
    const inputNombreTarea = formEditTask[0].querySelector("input[name='nombre_task']");
    const inputDescTarea = formEditTask[0].querySelector("textarea[name='des_tasks']");
    const inputEncargadoTarea = formEditTask[0].querySelector("input[name='encargado']");
    const inputSelectPrioridad = formEditTask[0].querySelector("select[name='prioridad']");
    const inputSprint = formEditTask[0].querySelector("input[name= 'sprint_task']");
    const optionsSelectPrioridad = inputSelectPrioridad.children;

    
    abrirModalFormEditTasks.forEach(button => {
        modalEditTaskForm.forEach(form => {

            
            cerrarModalFormEditTasks.forEach(button => {
                button.addEventListener("click", () => {
                    form.close();
                })
            })

            // Al hacer clic en el botón de abrir modal de edición
            button.addEventListener("click", async (e) => {
                e.preventDefault();

                // Obtener el ID de la tarea
                const idTarea = e.target.closest('.task').getAttribute('tarea_id');
                console.log("ID de la tarea:", idTarea);

                

                try {
                    // Hacer la llamada al backend para obtener los datos de la tarea
                    const response = await fetch(`http://localhost:8080/tasks/${idTarea}`);
                    
                    if (!response.ok) {
                        console.log("Error al obtener la tarea");
                        return;
                    }
                    
                    const result = await response.json();
                    // console.log(result);
                    if (!result) {
                        console.log("Error en la respuesta:", result);
                        return;
                    }
                    
                    // Asignar los valores de la tarea al formulario
                    const tareaAActualizar = result;
                    
                    // Llenar los campos del formulario con los datos de la tarea
                    inputIdTask.value = idTarea;
                    inputNombreTarea.value = tareaAActualizar.nombre_task;
                    inputDescTarea.value = tareaAActualizar.des_tasks;
                    inputEncargadoTarea.value = tareaAActualizar.encargado;
                    inputSprint.value = tareaAActualizar.sprint_task;


                    // // Seleccionar la prioridad correcta en el select
                    for (const option of optionsSelectPrioridad) {
                        if (option.value === tareaAActualizar.prioridad) {
                            option.selected = true;
                        }
                    }

                    // Mostrar el modal
                    form.showModal();

                } catch (err) {
                    console.error("ERROR: ", err);
                }
            });
        });
    });

    // Funcionalidad para enviar los valores actualizados al backend
    formEditTask.forEach(form => {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            
            const idTarea = e.target['id_task'].value;
                console.log("ID de la tarea:", idTarea);
    
            if (isNaN(idTarea)) {
                console.error("El id de la tarea no es válido");
                return;
            }
    
            const updatedTask = {
                tarea_id: e.target['id_task'].value,
                nombre_task: e.target['nombre_task'].value,
                prioridad: e.target['prioridad'].value,
                des_tasks: e.target['des_tasks'].value,
                encargado: e.target['encargado'].value,
                sprint_task: e.target['sprint_task'].value
            };
            console.log(updatedTask);
            
            try {
                const response = await fetch(`http://localhost:8080/tasks/${idTarea}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(updatedTask)
                });
    
                if (response.ok) {
                    alert("Tarea actualizada con éxito");
                    location.reload();  // Recargar la página para reflejar los cambios
                } else {
                    console.log("Error al actualizar la tarea");
                }
    
            } catch (err) {
                console.error("Error al enviar los datos:", err);
            }
        });
    });

    // Funcionalidad para eliminar la tarea seleccionada
    const buttonDeleteTask = document.getElementById("delete-task");

    buttonDeleteTask.addEventListener("click", async (e) => {
        const idTarea = document.querySelector("input[name='id_task']").value;
    
        if (!idTarea) {
            console.error("No se encontró un ID de tarea válido.");
            return;
        }
    
        const result = await fetch(`http://localhost:8080/tasks/${idTarea}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        });
    
        if (result.ok) {
            alert("Tarea eliminada con éxito");
            location.reload();
        } else {
            console.log("ERROR AL ELIMINAR LA TAREA");
        }
    });
}


///////////////////////////////////////////////////////////////////////////////////////////
// Funcionalidad para el form de crear proyectos

const abrirModalFormProject = document.getElementById("abrir-form-proyecto");
const cerrarModalFormProject = document.getElementById("cerrar-form-proyecto");
const modalFormProject = document.getElementById("modal-form-project");
const formProyecto = document.querySelector("#form-project");

// Asegurar que los elementos existen antes de añadir eventos
if (abrirModalFormProject && cerrarModalFormProject && modalFormProject) {
    abrirModalFormProject.addEventListener("click", () => {
        modalFormProject.showModal();
    });

    cerrarModalFormProject.addEventListener("click", () => {
        modalFormProject.close();
    });
}


// fetch para enviar los datos a la base de datos



    formProyecto.addEventListener("submit", async (e) => {
    e.preventDefault();


        // // Verifica si los campos existen y están obteniendo valores correctos
        // console.log(document.querySelector('#nombre_proyecto').value);
        // console.log(document.querySelector('#prioridad').value);
        // console.log(document.querySelector('#Sprint_inicio').value);
        // console.log(document.querySelector('#Sprint_final').value);
        // console.log(document.querySelector('#encargado_proyecto').value);

        

        const res = await fetch("http://localhost:8080/project", {
            
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },


            
            body: JSON.stringify({
                nombre_proyecto: document.querySelector('#nombre_proyecto').value,
                prioridad: document.querySelector('#prioridad').value,
                sprint_inicio: document.querySelector('#Sprint_inicio').value,
                sprint_final: document.querySelector('#Sprint_final').value,
                encargado_proyecto: document.querySelector('#encargado_proyecto').value,
            })
        });
        location.reload(); 
        console.log('Respuesta:', res);
    });



//////////////////////////////////////////////////////////////////////////////////////
//FUNCIONALIDAD PARA ABRIR Y CERRAR FORM EDITAR PROYECTO
function abrirModalEditProjects() {
    const abrirModalFormEditProjects = document.querySelectorAll(".btn-abrir-edit-project");
    const cerrarModalFormEditProject = document.getElementById("cerrar-form-proyecto-edit");
    const modalEditProject = document.getElementById("modal-edit-project-form");
    const formEditProject = document.querySelectorAll(".form-edit-project"); 



    // Obtener referencias a los inputs del formulario
    const inputIdProject = modalEditProject.querySelector("input[name='id_proyecto']");
    const inputNombreProject = modalEditProject.querySelector("input[name='nombre_proyecto']");
    const inputSelectPrioridadProject = modalEditProject.querySelector("select[name='Prioridad']");
    const inputSprintInicio = modalEditProject.querySelector("input[name='Sprint_inicio']");
    const inputSprintFinal = modalEditProject.querySelector("input[name='Sprint_final']");
    const inputEncargadoProyecto = modalEditProject.querySelector("input[name='encargado_proyecto']");
    const optionsSelectPrioridadProject = inputSelectPrioridadProject.children;

    abrirModalFormEditProjects.forEach(button => {
        // Evento para abrir el modal
        button.addEventListener("click", async (e) => {
            e.preventDefault();

            const idProject = e.target.closest('.proyecto').getAttribute('id_proyecto');
            

            try {
                const response = await fetch(`http://localhost:8080/project/${idProject}`);

                if (!response.ok) {
                    console.log("Error al obtener el proyecto");
                    return;
                }

                const proyectoAActualizar = await response.json();

                // Llenar los campos del formulario con los datos del proyecto
                inputIdProject.value = idProject;
                inputNombreProject.value = proyectoAActualizar.nombre_proyecto;
                inputSprintInicio.value = proyectoAActualizar.sprint_inicio;
                inputSprintFinal.value = proyectoAActualizar.sprint_final;
                inputEncargadoProyecto.value = proyectoAActualizar.encargado_proyecto;

                // Seleccionar la prioridad correcta
                for (const option of optionsSelectPrioridadProject) {
                    option.selected = (option.value === proyectoAActualizar.prioridad);
                }

                // Mostrar el modal
                modalEditProject.showModal();

            } catch (err) {
                console.error("ERROR: ", err);
            }
        });
    });

    // Evento para cerrar el modal
    if (cerrarModalFormEditProject) {
        cerrarModalFormEditProject.addEventListener("click", () => {
            modalEditProject.close();
        });
    }

    // Evento para actualizar el proyecto al enviar el formulario
    formEditProject.forEach(form => {
        form.addEventListener("submit", async (e) => {
            

            e.preventDefault();
            console.log("Botón presionado");

            const idProject = e.target['id_proyecto'].value;
            console.log("ID del proyecto:", idProject );
            

            if (isNaN(idProject)) {
                console.error("El ID del proyecto no es válido");
                return;
            }

            const updatedProject = {
                id_proyecto: e.target['id_proyecto'].value,
                nombre_proyecto: e.target['nombre_proyecto'].value,
                prioridad: e.target['Prioridad'].value,
                sprint_inicio: e.target['Sprint_inicio'].value,
                sprint_final:e.target['Sprint_final'].value, 
                encargado_proyecto: e.target['encargado_proyecto'].value,
            };

            console.log( "proyectos",updatedProject);
            
            try {
                const response = await fetch(`http://localhost:8080/project/${idProject}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(updatedProject)
                });

                if (response.ok) {
                    alert("Proyecto actualizado con éxito");
                    location.reload(); 
                } else {
                    console.log("Error al actualizar el proyecto");
                }

            } catch (err) {
                console.error("Error al enviar los datos:", err);
            }
        });

    });

    // Funcionalidad para eliminar el proyecto seleccionado
    const buttonDeleteProject = document.getElementById("delete-project");

    buttonDeleteProject.addEventListener("click", async (e) => {
        const idProject = document.querySelector("input[name='id_proyecto']").value;
    
        if (!idProject) {
            console.error("No se encontró un ID de tarea válido.");
            return;
        }
    
        const result = await fetch(`http://localhost:8080/project/${idProject}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        });
    
        if (result.ok) {
            alert("Proyecto eliminado con éxito");
            location.reload();
        } else {
            console.log("ERROR AL ELIMINAR EL PROYECTO");
        }
    });
}









// Inicializar eventos del dashboard
document.addEventListener("DOMContentLoaded", function () {
    // Mostrar proyectos por defecto al cargar la página
    containerDashboardProyectos.style.display = "block";
    containerDashboard.style.display = "none";
    titleDashboard.innerText = "Tus Proyectos";
    mostrarProyectos();
});

verProyectos.addEventListener("click", function (e) {
    titleDashboard.innerText = "Tus Proyectos";
    containerDashboard.style.display = "none";
    containerDashboardProyectos.style.display = "block";
    mostrarProyectos();
});

verTareas.addEventListener("click", function () {
    titleDashboard.innerText = "Proyecto X";
    containerDashboard.style.display = "flex";
    containerDashboardProyectos.style.display = "none";
});

//Funcionalidad de reporte en pdf
document.getElementById('generarReporte').addEventListener('click', () => {
    fetch('http://localhost:8080/report', {
        method: 'GET',
    })
    .then(response => {
        if (response.ok) {
            return response.blob(); // Obtén el archivo como un blob
        } else {
            throw new Error('Error al generar el reporte');
        }
    })
    .then(blob => {
        // Crea una URL para descargar el archivo
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'reporte.pdf'; 
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('No se pudo generar el reporte');
    });
});







console.log("Js funcionando")