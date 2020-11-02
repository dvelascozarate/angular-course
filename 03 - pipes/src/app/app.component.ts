import { Component } from "@angular/core";
import { reject } from "q";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  nombre = "Daniel";
  arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  pi = Math.PI;
  per = 0.254;
  salario = 2530.45;
  json = {
    nombre: "Daniel",
    apellidos: "Velasco Zárate",
    teléfono: {
      compañía: "Weex",
      número: 7226294453
    }
  };
  date = new Date(2017, 0, 15);
  promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Llegó la data");
    }, 3500);
  });
  nombreCompleto = 'danIel ezequIel velaSco zaratE';
  video ="hUIFgd8wBBA";
  contrasena = "mi contraseña";
  show = true;
}
