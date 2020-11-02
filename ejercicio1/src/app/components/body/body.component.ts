import { Component } from "@angular/core";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html"
})
export class BodyComponent {

  mostrar: boolean = true;

  personajes : string[] = ['Spiderman', 'Ironman', 'Capitán América'];

  mensaje : any = {
    autor: "Ben Parker",
    frase: "Un gran poder conlleva una gran responsabilidad"
  };

  
}
