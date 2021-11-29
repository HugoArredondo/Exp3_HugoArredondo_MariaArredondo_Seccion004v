import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-niveles',
  templateUrl: './niveles.page.html',
  styleUrls: ['./niveles.page.scss'],
})
export class NivelesPage implements OnInit {

  slides=[
    {
      img:'assets/preescolar1.jpg',
      titulo: 'Educación Preescolar',
      contenido:'Este ciclo formativo de educación consiste en el cuidado y la asistencia de niños. Este nivel deberia ser obligatorio, aunque en nuestro pais es optativo, este nivel tiene como objetivo la enseñanza básica de la lectura. '
    },
    {
     img:'assets/primaria.jpg',
     titulo: 'Educación Primaria',
     contenido:'Este nivel educativo tiene el objetivo de asegurar la alfabetización de todo niño mayor de 6 años. Al joven se le asignará una serie de tareas con el fin de que éste aprenda a leer, escribir, matemáticas, conceptos culturales e historia.'
   },
   {
     img:'assets/secundaria.jpg',
     titulo: 'Educación Secundaria',
     contenido:'Esta etapa de enseñanza se conoce como "educación media" y esta consiste en un programa de aprendizaje más intensivo, con el fin de preparar a todo alumno para su ingreso a la universidad.'
   }
  ]

  constructor() { }

  ngOnInit() {
  }

}
 