import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  interpolationBinding = 'Componente formulario';
  propertyBinding = 'blue';


  newEmail = {
    'email': '',
    'title' : 'Email'
  }
  // propertyBinding = 'True';
  constructor() { }

  ngOnInit(): void {
  }

  enviar($event : any){
    console.log($event);
  }

}
