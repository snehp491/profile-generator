const Intern = require('../lib/Intern')

test('Test Role on Intern', ()=>{
    const intern = new Intern('1', 'Sneh Patel', 'snehp491@gmail.com');
    expect(intern.getRole()).toBe('Intern')
});