
let userSelected = null

function Read() {
let data = {};
data['txtName'] = document.getElementById('txtName').value
data['txtAge'] = document.getElementById('txtAge').value
data ['txtEmail'] = document.getElementById('txtEmail').value
    return data

}
function formSubmit() {
    let formData = Read();
    if (userSelected == null) {
        Create(formData);
    }
    else {
        Update(formData)
    }
    ClearForm();
}
function Create(data) {
    let table = document.getElementById('tblContact').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length)

    cell1 = newRow.insertCell(0)
    cell1.innerHTML = data.txtName

    cell2 = newRow.insertCell(1)
    cell2.innerHTML = data.txtAge

    cell3 = newRow.insertCell(2)
    cell3.innerHTML = data.txtEmail

    cell4 = newRow.insertCell(3)
    cell4.innerHTML = `<a onclick ="Edit(this)">Edit</a>`

    cell5 = newRow.insertCell(4)
    cell5.innerHTML = `<a onclick ="Delete(this)">Delete</a>`


}

function Edit(td){
    userSelected = td.parentElement.parentElement
    document.getElementById('txtName').value = userSelected.cells[0].innerHTML
    document.getElementById('txtAge').value = userSelected.cells[1].innerHTML
    document.getElementById('txtEmail').value = userSelected.cells[2].innerHTML
}
function Update(formData) {
    userSelected.cells[0].innerHTML = formData.txtName
    userSelected.cells[1].innerHTML = formData.txtAge
    userSelected.cells[2].innerHTML = formData.txtEmail


}

function Delete(td) {
  if (confirm('คุณการลบข้อมูลหรือไม่')) {
      row = td.parentElement.parentElement;
      document.getElementById('tblContact').deleteRow(row.rowIndex)
      ClearForm();

  }

}   
function ClearForm() {
    document.getElementById('txtName').value = "";
    document.getElementById('txtAge').value = "";
    document.getElementById('txtEmail').value = "";
    userSelected = null;
}
localStorage.setItem("name","Phichet ch");
document.getElementById("Tdname").innerHTML = localStorage.getItem("name")

localStorage.setItem("age","19 years");
document.getElementById("Tdage").innerHTML = localStorage.getItem("age")

localStorage.setItem("email","66309010008@gmail.com");
document.getElementById("Tdemail").innerHTML = localStorage.getItem("email")

