function createCards(team) {
    let cardDeck = '';
    team.forEach((employee) => {
        console.log(employee.getRole());
        if (employee.getRole() === 'Manager') {
            cardDeck += createManagerCard(employee);
        } else if (employee.getRole() === 'Engineer') {
            cardDeck += createEngineerCard(employee);
        } else if (employee.getRole() === 'Intern') {
            cardDeck += createInternCard(employee);
        }
    });

    return cardDeck;
}

function createEngineerCard(engineer) {
    const url = 'https://github.com/' + engineer.github;
    return `<div class="col-lg-4">
                    <div class="card m-3">
                        <div class="card-header">
                            <div class="d-flex flex-row">
                                <div>
                                    <h4>${engineer.name}</h4>
                                </div>
                            </div>
                            <div class="d-flex flex-row">
                                <div>
                                    <i data-feather="code"></i>
                                </div>
                                <div class="ml-3">
                                    ${engineer.getRole()}
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="d-flex flex-row">
                                <div>
                                    <label>ID</label>
                                </div>
                                <div class="ml-3">
                                    <span>${engineer.id}</span>
                                </div>
                              </div>  
                              <div class="d-flex flex-row">
                                <div>
                                    <label>Email</label>
                                </div>
                                <div class="ml-3">
                                    <span>${engineer.email}</span>
                                </div>
                              </div>  
                              <div class="d-flex flex-row">
                                <div>
                                    <label>GitHub</label>
                                </div>
                                <div class="ml-3">
                                    <a href="${url}">${engineer.github}</a>
                                </div>
                              </div>  
                        </div>
                    </div>
                </div> `
}

function createManagerCard(manager) {
    return `<div class="col-lg-4">
                    <div class="card m-3">
                        <div class="card-header">
                            <div class="d-flex flex-row">
                                <div>
                                    <h4>${manager.name}</h4>
                                </div>
                            </div>
                            <div class="d-flex flex-row">
                                <div>
                                    <i data-feather="briefcase"></i>
                                </div>
                                <div class="ml-3">
                                    ${manager.getRole()}
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="d-flex flex-row">
                                <div>
                                    <label>ID</label>
                                </div>
                                <div class="ml-3">
                                    <span>${manager.id}</span>
                                </div>
                              </div>  
                              <div class="d-flex flex-row">
                                <div>
                                    <label>Email</label>
                                </div>
                                <div class="ml-3">
                                    <span>${manager.email}</span>
                                </div>
                              </div>  
                              <div class="d-flex flex-row">
                                <div>
                                    <label>Office Num.</label>
                                </div>
                                <div class="ml-3">
                                    <span>${manager.officeNumber}</span>
                                </div>
                              </div>  
                        </div>
                    </div>
                </div> `
}

function createInternCard(intern) {
    return `<div class="col-lg-4">
                    <div class="card m-3">
                        <div class="card-header">
                            <div class="d-flex flex-row">
                                <div>
                                    <h4>${intern.name}</h4>
                                </div>
                            </div>
                            <div class="d-flex flex-row">
                                <div>
                                    <i data-feather="award"></i>
                                </div>
                                <div class="ml-3">
                                    ${intern.getRole()}
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                              <div class="d-flex flex-row">
                                <div>
                                    <label>ID</label>
                                </div>
                                <div class="ml-3">
                                    <span>${intern.id}</span>
                                </div>
                              </div>  
                              <div class="d-flex flex-row">
                                <div>
                                    <label>Email</label>
                                </div>
                                <div class="ml-3">
                                    <span>${intern.email}</span>
                                </div>
                              </div>  
                              <div class="d-flex flex-row">
                                <div>
                                    <label>School</label>
                                </div>
                                <div class="ml-3">
                                    <span>${intern.school}</span>
                                </div>
                              </div>  
                        </div>
                    </div>
                </div> `
}

module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    
        <head>
            <title>My Team</title>
            <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        </head>
        
        <body>
            
                <header class="nav justify-content-center"> 
                <h1 class="p-3">
                    <i data-feather="users"></i>

                    Team
                    </h1>
                </header>
                <div class="container">
                    <div class="row justify-content-center">
                        ${createCards(team)}
                    </div>
                </div>
                <script>
                  feather.replace()
                </script>
        </body>
    </html>`;
}