const Engineer = require('../lib/Engineer')

test('Test Role on Engineer', ()=>{
    const engineer = new Engineer('1', 'Sneh Patel', 'snehp491@gmail.com');
    expect(engineer.getRole()).toBe('Engineer')
});