const Employee = require('../lib/Employee')

test('Test Role on Employee', ()=>{
    const employee = new Employee('1', 'Sneh Patel', 'snehp491@gmail.com');
    expect(employee.getRole()).toBe('Employee')
});