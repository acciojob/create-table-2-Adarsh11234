function createTable() {
    let rn = prompt("Input number of rows");
    let cn = prompt("Input number of columns");
    
    if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }
    
    rn = parseInt(rn);
    cn = parseInt(cn);
    
    let table = document.getElementById("myTable");
    table.innerHTML = ""; // Clear previous table if any
    
    for (let i = 0; i < rn; i++) {
        let row = table.insertRow();
        for (let j = 0; j < cn; j++) {
            let cell = row.insertCell();
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
