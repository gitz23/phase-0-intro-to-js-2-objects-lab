// Write your solution in this file!
const employee ={
    name : "Gitau",
    streetAddress: 'Nairobi',
}

function updateEmployeeWithKeyAndValue(employee, streetAddress, value){
    const newName = {...employee};
    newName[streetAddress] = '11 Broadway';
  return newName;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value){
    employee[streetAddress] = '12 Broadway';
    return employee;
}

function deleteFromEmployeeByKey(employee, name){
    const newName = {...employee};
    delete newName[name];
    return newName;
}

function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee[name];
    return employee;
}