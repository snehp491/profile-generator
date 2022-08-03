const Manager = require('../lib/Manager')

test('Test Role on Manager', ()=>{
    const manager = new Manager('1', 'Sneh Patel', 'snehp491@gmail.com');
    expect(manager.getRole()).toBe('Manager')
});