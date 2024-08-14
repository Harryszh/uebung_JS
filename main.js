const laptop = {
    // properties (Eigenschaften)
    marke: "Dell",
    farbe: "schwarz",
    tasten: 104,
    power: false,
    ram: 16,
    besetzterArbeitspeicher:0,

    // getter 
    get info() {
      return `Marke: ${this.marke}, Farbe: ${this.farbe}, Tasten: ${this.tasten}, Power: ${this.power} ${this.ram},
              Ram: ${this.ram}, besetzterArbeitspeicher: ${this.besetzterArbeitspeicher} ` ;
    
    },
  
    // setter
    set powerStatus(status) {
      this.power = status;
    },
  
    // method (Methoden)
    start: function () {
      if (this.power) {
        return "Laptop wurde bereits gestartet.";
      } else {
        this.powerStatus = true;
        return "Laptop wird hochgefahren...";
      }
    },
  
    // neue methode stop
    stop: function () {
      if (this.power) {
        this.powerStatus = false;
        return "Laptop wird heruntergefahren...";
      } else {
        return "Laptop ist bereits ausgeschaltet.";
      }
    }
  };

 
  
  // methodenaufruf und Ausgabe
  console.log(laptop.stop());
  console.log(laptop.tasten);
  console.log(laptop.start()); // Was wird ausgegeben?
  console.log(laptop.ram);