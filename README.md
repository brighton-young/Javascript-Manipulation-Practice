# Javascript-Manipulation-Practice
Practice project to increase your skills working with arrays, objects, and arrays of objects

---

### **Ticket Breakdown: JavaScript Arrays and Objects Practice**

---

### **Ticket 1: Basic Array Methods**

---

1. **Add a new employee to the end of the array.**

   - **Array to work with:**
     ```javascript
     let employees = ['John', 'Sarah', 'Eric'];
     ```

   - **Hint:** Use the `push()` method to add an element to the end of the array.

---

2. **Remove the last employee from the array.**

   - **Array to work with:**
     ```javascript
     let employees = ['John', 'Sarah', 'Eric'];
     ```

   - **Hint:** Use the `pop()` method to remove the last element from an array.

---

3. **Add a new employee to the beginning of the array.**

   - **Array to work with:**
     ```javascript
     let employees = ['John', 'Sarah', 'Eric'];
     ```

   - **Hint:** Use the `unshift()` method to add an element to the beginning of the array.

---

4. **Remove the first employee from the array.**

   - **Array to work with:**
     ```javascript
     let employees = ['John', 'Sarah', 'Eric'];
     ```

   - **Hint:** Use the `shift()` method to remove the first element from the array.

---

5. **Find the index of 'Sarah' in the array.**

   - **Array to work with:**
     ```javascript
     let employees = ['John', 'Sarah', 'Eric'];
     ```

   - **Hint:** Use the `indexOf()` method to find the index of a specific element in the array.

---

### **Ticket 2: Intermediate Array Methods**

---

1. **Filter out salaries below $50,000 from the array.**

   - **Array to work with:**
     ```javascript
     let salaries = [35000, 45000, 55000, 70000, 90000];
     ```

   - **Hint:** Use the `filter()` method to remove elements based on a condition.

---

2. **Create a new array with the square of each salary.**

   - **Array to work with:**
     ```javascript
     let salaries = [20000, 30000, 40000, 50000];
     ```

   - **Hint:** Use the `map()` method to transform each element in the array.

---

3. **Find the first salary that is greater than $60,000.**

   - **Array to work with:**
     ```javascript
     let salaries = [45000, 55000, 70000, 90000];
     ```

   - **Hint:** Use the `find()` method to return the first element that satisfies a condition.

---

4. **Calculate the total sum of all sales made.**

   - **Array to work with:**
     ```javascript
     let sales = [100, 200, 150, 300, 400];
     ```

   - **Hint:** Use the `reduce()` method to sum all the elements.

---

5. **Loop through the list of departments and log each one to the console.**

   - **Array to work with:**
     ```javascript
     let departments = ['HR', 'Finance', 'Engineering', 'Marketing'];
     ```

   - **Hint:** Use the `forEach()` method to iterate through the array.

---

### **Ticket 3: Advanced Array Manipulation**


---

1. **Create a new array that contains the first three items from the original inventory list.**

   - **Array to work with:**
     ```javascript
     let inventory = ['Laptop', 'Phone', 'Keyboard', 'Monitor', 'Mouse'];
     ```

   - **Hint:** Use the `slice()` method to extract a portion of the array.

---

2. **Remove two items starting from index 2 in the inventory.**

   - **Array to work with:**
     ```javascript
     let inventory = ['Laptop', 'Phone', 'Keyboard', 'Monitor', 'Mouse'];
     ```

   - **Hint:** Use the `splice()` method to remove elements from the array.

---

3. **Add new equipment to the inventory starting at index 3.**

   - **Array to work with:**
     ```javascript
     let inventory = ['Laptop', 'Phone', 'Keyboard', 'Monitor'];
     ```

   - **Hint:** Use the `splice()` method to add elements at a specific index.

---

4. **Merge two arrays of office equipment into one.**

   - **Arrays to work with:**
     ```javascript
     let officeEquipment1 = ['Printer', 'Scanner', 'Desk'];
     let officeEquipment2 = ['Chair', 'Lamp', 'Notebook'];
     ```

   - **Hint:** Use the `concat()` method to merge two arrays.

---

5. **Sort the list of sales amounts in descending order.**

   - **Array to work with:**
     ```javascript
     let sales = [500, 1000, 750, 2000, 1250];
     ```

   - **Hint:** Use the `sort()` method and pass a comparison function to sort in descending order.

---

### **Ticket 4: Working with Objects**


---

1. **Create an object that represents an employee with properties: `firstName`, `lastName`, `position`, and `salary`.**

   - **Hint:** Use curly braces `{}` to create an object with key-value pairs.

---

2. **Update the `position` of the employee object.**

   - **Object to work with:**
     ```javascript
     let employee = {
         firstName: 'John',
         lastName: 'Doe',
         position: 'Software Engineer',
         salary: 80000
     };
     ```

   - **Hint:** Use dot notation to update the object's properties.

---

3. **Add a new property `hireDate` to the employee object.**

   - **Object to work with:**
     ```javascript
     let employee = {
         firstName: 'John',
         lastName: 'Doe',
         position: 'Software Engineer',
         salary: 80000
     };
     ```

   - **Hint:** Use dot notation to add new properties to the object.

---

4. **Delete the `salary` property from the employee object.**

   - **Object to work with:**
     ```javascript
     let employee = {
         firstName: 'John',
         lastName: 'Doe',
         position: 'Software Engineer',
         salary: 80000
     };
     ```

   - **Hint:** Use the `delete` operator to remove a property from an object.

---

5. **Loop through the properties of the employee object and log each key-value pair to the console.**

   - **Object to work with:**
     ```javascript
     let employee = {
         firstName: 'John',
         lastName: 'Doe',
         position: 'Software Engineer',
         salary: 80000
     };
     ```

   - **Hint:** Use a `for...in` loop to iterate over the object's properties.

---

### **Ticket 5: Combining Arrays and Objects**

**Description:** Practice working with arrays of objects(*Similar to JSON*) and applying array methods to objects.

---

1. **Create an array of objects representing projects with properties: `projectName`, `deadline`, and `status`.**

   - **Hint:** You can create an array of objects the same way you create an array of any other type.



2. **Create a new array that contains only the names of the projects.**

   - **Array to work with:**
     ```javascript
     let projects = [
         { projectName: 'Project A', deadline: '2024-02-01', status: 'in progress' },
         { projectName: 'Project B', deadline: '2024-01-15', status: 'not started' },
         { projectName: 'Project C', deadline: '2024-03-01', status: 'in progress' }
     ];
     ```

   - **Hint:** Use the `map()` method to extract project names from the array of objects.

---



3. **Filter the array to only include projects that are 'in progress'.**

   - **Array to work with:**
     ```javascript
     let projects = [
         { projectName: 'Project A', deadline: '2024-02-01', status: 'in progress' },
         { projectName: 'Project B', deadline: '2024-01-15', status: 'not started' },
         { projectName: 'Project C', deadline: '2024-03-01', status: 'in progress' }
     ];
     ```

   - **Hint:** Use the `filter()` method to return projects with the status 'in progress'.

---

4. **Sort the projects by their deadline in ascending order.**

   - **Array to work with:**
     ```javascript
     let projects = [
         { projectName: 'Project A', deadline: '2024-02-01', status: 'in progress' },
         { projectName: 'Project B', deadline: '2024-01-15', status: 'not started' },
         { projectName: 'Project C', deadline: '2024-03-01', status: 'in progress' }
     ];
     ```

   - **Hint:** Use the `sort()` method with a comparison function to sort by the `deadline` property in ascending order.

---

