// Write your solution in this file!
const employee ={
    name: "Sam",
    streetAddress: "12 Broadway",
}

function updateEmployeeWithKeyAndValue(employee, name, Sam){
    const newName ={...employee};
    newName[name] = "11 Broadway";
    return newName;
}

function deleteFromEmployeeByKey(employee, name){
    let newEmployee = {...employee}
    delete newEmployee[name];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee[name];
    return employee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, Broadway){
    delete employee[streetAddress];
    return employee;
}