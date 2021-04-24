console.log("Anand");
var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}





function readFormData() {
    var formData = {};
    formData["fullname"] = document.getElementById("firstname").value;
    formData["lastname"] = document.getElementById("lastname").value;

    return formData;
}





function insertNewRecord(data) {
    var table = document.getElementById("user-table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastname;
}





function validate() {
    isValid = true;
    if (document.getElementById("fullname").value == "") {
        isValid = false;
        document.getElementById("fullnameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullnameValidationError").classList.contains("hide"))
            document.getElementById("fullnameValidationError").classList.add("hide");
    }
    return isValid;
}