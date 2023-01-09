
 /*const form = document.getElementById('Datos');
 let formData = new FormData (form);

form.addEventListener("submit", function(event) {
    event.preventDefault();
  

    let Tabla = document.getElementById('TablaContenido');
    let nuevaLinea = Tabla.insertRow();

    let celda = nuevaLinea.insertCell(0);
    celda.textContent = Datos.get("userName");

    celda = nuevaLinea.insertCell(1);
    celda.textContent = "Prueba";

    celda = nuevaLinea.insertCell(2);
    celda.textContent = "Prueba";

    celda = nuevaLinea.insertCell(3);
    celda.textContent = "Prueba";

}); */


const form = document.getElementById('Datos');

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = new FormData (form);
    let tablaVar = document.getElementById("TablaContenido");
    let newTableRow = tablaVar.insertRow();

    let newTableCell = newTableRow.insertCell(0);
    newTableCell.textContent = formData.get("userName");
    
    newTableCell =newTableRow.insertCell(1);
    newTableCell.textContent= formData.get("userAge");;

    newTableCell =newTableRow.insertCell(2);
    newTableCell.textContent= formData.get("userClass");

    newTableCell =newTableRow.insertCell(3);
    newTableCell.textContent= formData.get("userContact");

    //Botón Eliminar 

    let newdeleterow = newTableRow.insertCell(4);
    let deletebutton = document.createElement ("button");
    deletebutton.textContent = "Eliminar";
    newdeleterow.appendChild(deletebutton);

    deletebutton.addEventListener("click", (event)  => {
        event.target.parentNode.parentNode.remove ()
    }
    )

    


});




