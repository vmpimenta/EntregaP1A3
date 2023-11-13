function addGame() {
    var title = document.getElementById("gameTitle").value;
    var genre = document.getElementById("gameGenre").value;

    if (title === "" || genre === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var table = document.getElementById("gameTable");
    var row = table.insertRow(1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = title;
    cell2.innerHTML = genre;
    cell3.innerHTML = '<button onclick="editGame(this)">Editar</button> <button onclick="deleteGame(this)">Excluir</button>';

    document.getElementById("gameForm").reset();
}

function editGame(row) {
    var selectedRow = row.parentNode.parentNode.rowIndex;
    var table = document.getElementById("gameTable");
    document.getElementById("gameTitle").value = table.rows[selectedRow].cells[0].innerHTML;
    document.getElementById("gameGenre").value = table.rows[selectedRow].cells[1].innerHTML;
    table.deleteRow(selectedRow);
}

function deleteGame(row) {
    var selectedRow = row.parentNode.parentNode.rowIndex;
    document.getElementById("gameTable").deleteRow(selectedRow);
}