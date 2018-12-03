export {renderInputs};
export {renderRecord};
export {renderSubmit};

function renderInputs() {
    let body = document.querySelector("body");
    let form = document.createElement('form');
    form.name = "myForm";
    form.action = "http://localhost:3000/api/measures";
    form.method = "post";
    form.setAttribute("id", "myForm");
    for(let i in arguments) {
        let input = document.createElement('input');
        input.name = arguments[i];
        form.appendChild(input);
    }
    let saveBtn = document.createElement("input");
    saveBtn.setAttribute("type", "submit");
    saveBtn.setAttribute("name", "submit");
    saveBtn.value = "Сохранить";
    form.appendChild(saveBtn);
    body.appendChild(form);
}

function renderSubmit() {
    document.addEventListener("DOMContentLoaded", function() {
        let form = document.forms.myForm;
        form.submit.addEventListener("click", sendRequest);
        function sendRequest(event) {
            let isValidForm = form.checkValidity();
            if (isValidForm) {
                event.preventDefault();
                let formData = new FormData(form);
                let request = new XMLHttpRequest();
                request.open("POST", form.action);
                request.send(formData);
            }
        }
    }); 
}

function renderRecord() {
    let body = document.querySelector("body");
    let row = document.createElement('div');
    for(let i in arguments) {
        let item = document.createElement('span');
        item.innerHTML = arguments[i];
        row.appendChild(item);
    }
    body.appendChild(row);
}
