import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Nombre: string = "Luis Garcia";
  public arreglo: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public pi : number = Math.PI;
  public porcentaje: number = 0.245;
  public salario = 1234.5;
  public fecha = new Date();
  public persona={
    nombre:'IJ',
    edad:56,
    direccion:{
      calle:'mi callle',
      casa:'457'
    }
  }
  public nombre2:string='IsAbEl JiMenEz'
}
