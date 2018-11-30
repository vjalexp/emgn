import { saveData } from "./Storage.js";

export {renderInputs};
export {renderRecord};
export {toJSONString};
export {renderSubmit};


function renderInputs() {
    let body = document.querySelector("body");
    let form = document.createElement('form');
    form.setAttribute("id", "myForm");
    for(let i in arguments) {
        let input = document.createElement('input');
        input.name = arguments[i];
        form.appendChild(input);
    }
    let saveBtn = document.createElement("input");
    saveBtn.setAttribute("type", "submit");
    saveBtn.value = "Сохранить";
    form.appendChild(saveBtn);
    body.appendChild(form);
}

function toJSONString(form) {
    let obj = {};
    let elements = form.querySelectorAll("input, select, textarea");
    for( let i = 0; i < elements.length; ++i ) {
        let element = elements[i];
        let name = element.name;
        let value = element.value;

        if( name ) {
            obj[ name ] = value;
        }
    }

    return JSON.stringify( obj );
}

function renderSubmit() {
    document.addEventListener("DOMContentLoaded", function() {
        let form = document.querySelector("#myForm");
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            let json = toJSONString(this);
            let newArr = [];
            newArr.push(json); 
            saveData(newArr);
            window.location.reload();
        }, false);
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
