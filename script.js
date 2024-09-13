var _a;
(_a = document.getElementById('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var degElement = document.getElementById('degree');
    var insElement = document.getElementById('ins');
    var yearElement = document.getElementById('year');
    var skillsElement = document.getElementById('skills');
    var expElement = document.getElementById('exp');
    var refElement = document.getElementById('ref');
    var name = "";
    var email = "";
    var phone = "";
    var degree = "";
    var institue = "";
    var year = "";
    var skills = "";
    var experience = "";
    var reference = refElement.value == "" ? "will be furnished on request." : refElement.value;
    if (nameElement && emailElement && phoneElement && degElement && insElement && yearElement && skillsElement && expElement) {
        name = nameElement.value.toUpperCase();
        email = emailElement.value;
        phone = phoneElement.value;
        degree = degElement.value;
        institue = insElement.value;
        year = yearElement.value;
        skills = skillsElement.value;
        experience = expElement.value;
    }
    else {
        console.error("something missing");
        return;
    }
    var output = "\n    <div class=\"output\">\n        <h1>RESUME</h1>\n        <div class=\"resume-content\">\n            <h2 class=\"name\">".concat(name, "</h2>\n            <p class=\"pi\"><strong>Email:<strong> ").concat(email, "</p>\n            <p class=\"pi\"><strong>Phone:<strong> ").concat(phone, "</p>\n            <br>\n            <h3>Education:</h3>\n            <p><strong>Degree:</strong> ").concat(degree, "</p>\n            <p><strong>Institute:</strong> ").concat(institue, "</p>\n            <p><strong>Year:</strong> ").concat(year, "</p>\n            <br>\n            <h3>Skills:</h3><ul>").concat(skills, "</ul>\n            <br>\n            <h3>Work Experience:</h3><p>").concat(experience, "</p>\n            <br>\n            <h3>Reference:</h3> ").concat(reference, "\n        </div>\n    </div>\n    ");
    var generatedOutput = document.getElementById('output');
    if (generatedOutput) {
        generatedOutput.innerHTML = output;
    }
    else {
        console.error('something missing...');
    }
});
