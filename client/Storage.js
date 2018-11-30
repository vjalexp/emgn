export { saveData }
export { loadData }

function saveData(obj) {
    localStorage.setItem('healthRecord_' + Date.now(), obj);
}

function loadData() {
    let keys = Object.keys(localStorage);
    let values = [];
    for (let item in keys) {
        values.push( localStorage.getItem(keys[item]) );
    }
    return values;
}

