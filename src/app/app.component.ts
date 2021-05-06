import { Component } from '@angular/core';

@Component({
  //Nombre de la etiqueta html de ese componente
  selector: 'app-root',
  //donde esta el html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-primera-app-angular';
}
