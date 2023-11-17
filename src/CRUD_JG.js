let data = [];

function createOrUpdate() {
  const name = document.getElementById('name').value;
  const gen = document.getElementById('gen').value;
  
  const Ano = document.getElementById('ano').value;

  if (name && gen && Ano) {
    const newData = { name, gen , Ano };

    // Check if the data already exists
    const existingIndex = data.findIndex(item => item.name === name);

    if (existingIndex !== -1) {
      // Update existing data
      data[existingIndex] = newData;
    } else {
      // Create new data
      data.push(newData);
    }

    // Clear form fields
    document.getElementById('crud-form').reset();

    // Update the table
    renderTable();
  } else {
    alert('Coloque o Nome do Jogo que deseja editar.');
  }
}

function deleteData(index) {
  data.splice(index, 1);
  renderTable();
}

function renderTable() {
  const tableBody = document.getElementById('table-body');
  tableBody.innerHTML = '';

  data.forEach((item, index) => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const ageCell = document.createElement('td');
    ageCell.textContent = item.gen;
    row.appendChild(ageCell);

    const anoCell = document.createElement('td');
    anoCell.textContent = item.Ano;
    row.appendChild(anoCell);

    const açãoCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteData(index);
    açãoCell.appendChild(deleteButton);

    row.appendChild(açãoCell);

    tableBody.appendChild(row);
  });
}