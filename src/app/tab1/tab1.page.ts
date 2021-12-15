import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor() {}

ngOnInit(): void {
  //instruccion para detenerse en donde se encuentra parado, tambien se puede poner el brackpoint
  debugger;

  let numero = 10;
  numero = 20;
  numero = numero + 10;
    console.log('Hola Mundo el numero es: ',numero);
    
}

}
