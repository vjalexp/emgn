import { renderRecord } from "./UI.js";

export class Measure {

    constructor(sys, dia, pulse) {
      this.sys = sys;
      this.dia = dia;
      this.pulse = pulse;
    }

    static load() {
        let request = new XMLHttpRequest();
        request.open("GET", "http://localhost:3000/api/measures", false);
        request.send();
        let status = request.status;
        if (status==200) {
            let allMeasures = JSON.parse(request.response);
            allMeasures.forEach(function(element) {
                renderRecord(element.sys, element.dia, element.pulse);
            });
        }
    }

    add() {

    }

    edit() {

    }

    delete() {

    }

}