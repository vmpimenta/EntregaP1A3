function addPlataform() {
    var title = document.getElementById("plataformTitle").value;
    var plataform = document.getElementById("plataformMultiplataform").value;

    if (title === "" || plataform === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var table = document.getElementById("plataformTable");
    var row = table.insertRow(1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = title;
    cell2.innerHTML = plataform;
    cell3.innerHTML = '<button onclick="editPlataform(this)">Editar</button> <button onclick="deletePlataform(this)">Excluir</button>';

    document.getElementById("plataformForm").reset();
}

function editPlataform(row) {
    var selectedRow = row.parentNode.parentNode.rowIndex;
    var table = document.getElementById("plataformTable");
    document.getElementById("plataformTitle").value = table.rows[selectedRow].cells[0].innerHTML;
    document.getElementById("plataformMultiplataform").value = table.rows[selectedRow].cells[1].innerHTML;
    table.deleteRow(selectedRow);
}

function deletePlataform(row) {
    var selectedRow = row.parentNode.parentNode.rowIndex;
    document.getElementById("plataformTable").deleteRow(selectedRow);
}