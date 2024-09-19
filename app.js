// Ticket 1: Basic Array Methods
function ticket1() {
    console.log("Ticket 1: Basic Array Methods");

    // Add a new employee to the end of the array
    let employees = ['John', 'Sarah', 'Eric'];
    employees.push('Michael');
    console.log("Add a new employee:", employees);

    // Remove the last employee from the array
    employees = ['John', 'Sarah', 'Eric'];
    employees.pop();
    console.log("Remove last employee:", employees);

    // Add a new employee to the beginning of the array
    employees = ['John', 'Sarah', 'Eric'];
    employees.unshift('Michael');
    console.log("Add a new employee at the beginning:", employees);

    // Remove the first employee from the array
    employees = ['John', 'Sarah', 'Eric'];
    employees.shift();
    console.log("Remove first employee:", employees);

    // Find the index of 'Sarah'
    employees = ['John', 'Sarah', 'Eric'];
    const index = employees.indexOf('Sarah');
    console.log("Index of Sarah:", index);
}

// Ticket 2: Intermediate Array Methods
function ticket2() {
    console.log("\nTicket 2: Intermediate Array Methods");

    // Filter out salaries below $50,000
    let salaries = [35000, 45000, 55000, 70000, 90000];
    let highSalaries = salaries.filter(salary => salary >= 50000);
    console.log("Salaries >= $50,000:", highSalaries);

    // Create a new array with the square of each salary
    salaries = [20000, 30000, 40000, 50000];
    let squaredSalaries = salaries.map(salary => salary * salary);
    console.log("Squared salaries:", squaredSalaries);

    // Find the first salary greater than $60,000
    salaries = [45000, 55000, 70000, 90000];
    let highSalary = salaries.find(salary => salary > 60000);
    console.log("First salary > $60,000:", highSalary);

    // Calculate the total sum of all sales
    let sales = [100, 200, 150, 300, 400];
    let totalSales = sales.reduce((total, sale) => total + sale, 0);
    console.log("Total sales:", totalSales);

    // Loop through the list of departments and log each one
    let departments = ['HR', 'Finance', 'Engineering', 'Marketing'];
    departments.forEach(department => console.log("Department:", department));
}

// Ticket 3: Advanced Array Manipulation
function ticket3() {
    console.log("\nTicket 3: Advanced Array Manipulation");

    // Create a new array that contains the first three items from the inventory
    let inventory = ['Laptop', 'Phone', 'Keyboard', 'Monitor', 'Mouse'];
    let firstThreeItems = inventory.slice(0, 3);
    console.log("First three items of inventory:", firstThreeItems);

    // Remove two items starting from index 2
    inventory = ['Laptop', 'Phone', 'Keyboard', 'Monitor', 'Mouse'];
    inventory.splice(2, 2);
    console.log("After removing two items from index 2:", inventory);

    // Add new equipment to the inventory starting at index 3
    inventory = ['Laptop', 'Phone', 'Keyboard', 'Monitor'];
    inventory.splice(3, 0, 'Tablet', 'Mouse');
    console.log("After adding new equipment:", inventory);

    // Merge two arrays of office equipment
    let officeEquipment1 = ['Printer', 'Scanner', 'Desk'];
    let officeEquipment2 = ['Chair', 'Lamp', 'Notebook'];
    let mergedEquipment = officeEquipment1.concat(officeEquipment2);
    console.log("Merged office equipment:", mergedEquipment);

    // Sort the list of sales amounts in descending order
    let sales = [500, 1000, 750, 2000, 1250];
    sales.sort((a, b) => b - a);
    console.log("Sales sorted in descending order:", sales);
}

// Ticket 4: Working with Objects
function ticket4() {
    console.log("\nTicket 4: Working with Objects");

    // Create an employee object
    let employee = {
        firstName: 'John',
        lastName: 'Doe',
        position: 'Software Engineer',
        salary: 80000
    };
    console.log("Employee object:", employee);

    // Update the position of the employee
    employee.position = 'Senior Software Engineer';
    console.log("Updated position:", employee);

    // Add a new property hireDate to the employee
    employee.hireDate = '2023-06-01';
    console.log("Employee with hireDate:", employee);

    // Delete the salary property from the employee
    delete employee.salary;
    console.log("Employee after deleting salary:", employee);

    // Loop through the properties of the employee object
    for (let key in employee) {
        console.log(`${key}: ${employee[key]}`);
    }
}

// Ticket 5: Combining Arrays and Objects
function ticket5() {
    console.log("\nTicket 5: Combining Arrays and Objects");

    // Create an array of projects
    let projects = [
        { projectName: 'Project A', deadline: '2024-02-01', status: 'in progress' },
        { projectName: 'Project B', deadline: '2024-01-15', status: 'not started' },
        { projectName: 'Project C', deadline: '2024-03-01', status: 'in progress' }
    ];

    // Create a new array that contains only the names of the projects
    let projectNames = projects.map(project => project.projectName);
    console.log("Project names:", projectNames);

    // Filter the array to only include projects that are 'in progress'
    let inProgressProjects = projects.filter(project => project.status === 'in progress');
    console.log("Projects in progress:", inProgressProjects);

    // Sort the projects by their deadline in ascending order
    projects.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    console.log("Projects sorted by deadline:", projects);
}

// Run all tickets sequentially
function runAllTickets() {
    ticket1();
    ticket2();
    ticket3();
    ticket4();
    ticket5();
}

// Execute the function to run all problems
runAllTickets();
