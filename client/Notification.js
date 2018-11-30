export class Notification {

    constructor(severity, text) {
      this.severity = severity || 0;
      this.text = text;
    }

    calculateSeverity() {

    }

  
    displayNotification() {
        alert(this.severity);
        alert(this.text);
    }
    
  
}