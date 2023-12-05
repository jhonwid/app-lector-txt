//! PROCESO CARGAR DATOS DE ARCHIVO .TXT Y GENERAR U A TABLA EN HTML DE FORMA ALFABETICA
function processFile() {

    const fileInput = document.getElementById('fileInput');
    const dataTable = document.getElementById('dataTable');

    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const content = e.target.result;
            const lines = content.split('\n');

            //* Ordenar alfabeticamente - Se ordena los datos de forma alfabetica que se encuentra en los archivos .txt
            const sortedLines = lines.sort();

            //* Crear la tabla - Se crea las cabeceras de las columna y se le coloca un titulo
            let tableHTML = '<thead><tr><th>NOMBRE</th><th>APELLIDO</th><th>EDAD</th><th>CIUDAD</th><th>TELEFONO</th></tr></thead><tbody>';

            lines.forEach(line => {
                const columns = line.split('\t'); // Puedes ajustar el delimitador según el formato de tu archivo
                tableHTML += `<tr><td>${columns[0]}</td><td>${columns[1]}</td><td>${columns[2]}</td><td>${columns[3]}</td><td>${columns[4]}</td></tr>`;
            });

            tableHTML += '</tbody>';
            dataTable.innerHTML = tableHTML;
        };

        reader.readAsText(file);

        //* Si no se carga algun archivo .txt y se da clic en boton de procesar, saldra mensaje de alerta
    } else {
        alert('¡Sin archivo seleccionado! Por favor selecciona un archivo.');
    }
}

//! FUNCION PARA LIMPIAR LA TABLA Y SOLO DEJAR LA CABECERA DE LA COLUMNA
function clearTable() {

    const dataTable = document.getElementById('dataTable');
    dataTable.innerHTML = '<thead><tr><th>NOMBRE</th><th>APELLIDO</th><th>EDAD</th><th>CIUDAD</th><th>TELEFONO</th></tr></thead><tbody>';
}

//! FUNCION PARA ELIMINAR LA TABLA
// function removeTable() {

//     const dataTable = document.getElementById('dataTable');
//     dataTable.remove();
// }