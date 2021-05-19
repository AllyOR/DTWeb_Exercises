import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  oculto = false;

  numero = '';

  listaTodo = [];

  lista = [
    {
      "titulo":"Hacer la tarea",
      "descripcion":"tarea de DTW"
    },
    {
      "titulo":"Incricpión en la universidad",
      "descripcion":"Buscar formulario de inscripción"
    },
    {
      "titulo":"Hacer la compra",
      "descripcion":"Verificar precios de los productos"
    },
    {
      "titulo":"Pagar los impuestos",
      "descripcion":"Verificar la declaración de la renta"
    },
    {
      "titulo":"Lavar el carro",
      "descripcion":"Cambiar monedas para la máquina de lavado"
    },
    {
      "titulo":"Ir a la lavanderia",
      "descripcion":"Llevar la ropa azul"
    },
  ];
  constructor() { }

  ngOnInit(): any {
    //this.listaTodo = this.lista;//.slice(0,3);
    // this.listaTodo = this.lista.slice(0,3)
  }

}
