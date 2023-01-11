function onClick() {
    let item = document.getElementById("txtItem").value;// Tomo los valores del item
    let monto = document.getElementById("nbMonto").value; // Tomo los valores del monto

    let tabla = document.getElementById("tablaBody");
    let fila = tabla.insertRow();// Metodo para insertar una fila
    let celda1 = fila.insertCell();//Metodo para insertar una celda
    
    let txtItem = document.createTextNode(item);
    celda1.appendChild(txtItem);//Creo una variable que tome el valor de la variable items y utilizo un metodo para crear un texto dentro de la tabla

    let celda2 = fila.insertCell();
    let txtMonto = document.createTextNode(monto);
    celda2.appendChild(txtMonto);//Creo una variable que tome el valor de la variable monto y utilizo un metodo para crear un texto dentro de la tabla

    let celda3 = fila.insertCell();
    let btnTrash = document.createElement("button");
    let i = document.createElement("i");//traigo el boton del html

    i.className = "bi bi-trash-fill";// le asigno al boton el icono
    btnTrash.appendChild(i);// inserto el boton cuando se crea en la tabla
    btnTrash.onclick = function () {
        borrar(fila);
    }// funcion que para darle click y que borre

    celda3.appendChild(btnTrash);// agrega el boton a la fila

    document.getElementById("txtItem").value = "";
    document.getElementById("nbMonto").value = "";
}

function borrar(fila) {
    var tabla = document.getElementById("tablaBody");
    tabla.deleteRow(fila.rowIndex);
}// funcion que me permite borrar la fila. 