// Write your solution in this file!
const employee= {
    name:"Claudia Casas" ,
    streetAddress:"111 car avenue" 
}

function updateEmployeeWithKeyAndValue() {
    const newEmployee = { ...employee };

  newEmployee.name = `Sam`;

  newEmployee.streetAddress = `11 Broadway`;

  return newEmployee ;
}

function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.name=`Sam`;

    employee.streetAddress= `12 Broadway`;

    return employee;
}

function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;

    delete employee.streetAddress;

    return employee;
    
}

function deleteFromEmployeeByKey() {
    const newEmployee={...employee};

    delete newEmployee.name;

    delete newEmployee.streetAddress;

    return newEmployee;
}




  
