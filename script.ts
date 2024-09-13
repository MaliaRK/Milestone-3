document.getElementById('form')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const degElement = document.getElementById('degree') as HTMLInputElement;
    const insElement = document.getElementById('ins') as HTMLInputElement;
    const yearElement = document.getElementById('year') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
    const expElement = document.getElementById('exp') as HTMLTextAreaElement;
    const refElement = document.getElementById('ref') as HTMLInputElement;

    let name = "";
    let email = "";
    let phone = "";
    let degree = "";
    let institue = "";
    let year = "";
    let skills = "";
    let experience = "";
    let reference = refElement.value == "" ? "will be furnished on request." : refElement.value;


    if(nameElement && emailElement && phoneElement && degElement && insElement && yearElement && skillsElement && expElement) {
        name = nameElement.value.toUpperCase();
        email = emailElement.value;
        phone = phoneElement.value;
        degree = degElement.value;
        institue = insElement.value;
        year = yearElement.value;
        skills = skillsElement.value;
        experience = expElement.value;
    } else {
        console.error("something missing");
        return;
    }    

    const output = `
    <div class="output">
        <h1>RESUME</h1>
        <div class="resume-content">
            <h2 class="name">${name}</h2>
            <p class="pi"><strong>Email:<strong> ${email}</p>
            <p class="pi"><strong>Phone:<strong> ${phone}</p>
            <br>
            <h3>Education:</h3>
            <p><strong>Degree:</strong> ${degree}</p>
            <p><strong>Institute:</strong> ${institue}</p>
            <p><strong>Year:</strong> ${year}</p>
            <br>
            <h3>Skills:</h3><ul>${skills}</ul>
            <br>
            <h3>Work Experience:</h3><p>${experience}</p>
            <br>
            <h3>Reference:</h3> ${reference}
        </div>
    </div>
    `;

    const generatedOutput = document.getElementById('output');
    if(generatedOutput) {
        generatedOutput.innerHTML = output;
    } else {
        console.error('something missing...');
    }
})