
/*export class Marker {
    lng: number;
    lat: number;
    label?: string;
  }*/
export class Marker {
  icon = {}
  //Quando creo un nuovo marker e verifico quale label viene passata al costruttore,
  // se contiene il testo “Gas naturale” o “Energia elettrica” (abbreviati in Gas e Elettrica)
  // imposto l’icona e cancello l’etichetta


  constructor(public lat: number, public lng: number, public label?: string) {
	  if (this.label.includes("Gas")) {
  	  this.icon = { url: './assets/img/gas.ico', scaledSize: {width: 30, height: 30} };   // icona Gas
  	  this.label = "";
	  }
	  if (this.label.includes("elettrica")) {
  	  this.icon = { url: './assets/img/electricity.ico', scaledSize: {width: 30, height: 30} };   // icona Elettricità
  	  this.label = "";
    }
    if (this.label.includes("Teleriscaldamento")) {
  	  this.icon = { url: './assets/img/teleriscaldamento.ico', scaledSize: {width: 30, height: 30} };   // icona Elettricità
  	  this.label = "";
    }
    if (this.label.includes("Biomasse")) {
  	  this.icon = { url: './assets/img/biomasse.ico', scaledSize: {width: 30, height: 30} };   // icona Elettricità
  	  this.label = "";
    }
    if (this.label.includes("GPL")) {
  	  this.icon = { url: './assets/img/gpl.ico', scaledSize: {width: 30, height: 30} };   // icona Elettricità
  	  this.label = "";
    }
    if (this.label.includes("Olio") || this.label.includes("olio")) {
  	  this.icon = { url: './assets/img/oil.ico', scaledSize: {width: 30, height: 30} };   // icona Elettricità
  	  this.label = "";
	  }
  }
}


