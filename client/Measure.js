import { loadData } from "./Storage.js";
import { renderRecord } from "./UI.js";

export class Measure {

    constructor(sys, dia, pulse) {
      this.sys = sys;
      this.dia = dia;
      this.pulse = pulse;
    }

    static load() {
        let allMeasures = loadData();
        allMeasures.forEach(function(element) {
            element = JSON.parse(element);
            renderRecord(element.sys, element.dia, element.pulse);
        });
    }

    add() {

    }

    edit() {

    }

    delete() {

    }

}