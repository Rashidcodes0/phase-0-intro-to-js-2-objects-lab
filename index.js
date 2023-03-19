// Write your solution in this file
// Define the initial employee object
let employee = {
    name: 'Sam'
};

{ Object } employee
{ string } key
{ string } value
{ Object }

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
}


{ Object } employee
{ string } key
{ string } value
{ Object }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}


{ Object } employee
{ string } key
{ Object }

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = Object.assign({}, employee);
    delete newEmployee[key];
    return newEmployee;
}


{ Object } employee
{ string } key
{ Object }

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
