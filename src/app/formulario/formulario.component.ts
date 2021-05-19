import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class FormularioComponent implements OnInit {

  interpolationBinding = 'Componente formulario';
  propertyBinding = 'blue';
  oculto=false;


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
    this.oculto = !this.oculto;
  }

}
