import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metodologia',
  templateUrl: './metodologia.page.html',
  styleUrls: ['./metodologia.page.scss'],
})
export class MetodologiaPage implements OnInit {

  slides=[
    {
      img:'assets/tradicional.jpg',
      titulo: 'Metodología Tradicional',
      contenido:'Es un método expositivo, la evaluación del aprendizaje es reproductiva, y se centra en la calificación del resultado.La relación profesor-alumno es autoritaria, se fundamenta en la concepción del alumno como receptor de información...',
      enlace: 'https://www.bbmundo.com/especiales/especial-educacion-2019/que-es-la-educacion-tradicional/'
    },
    {
     img:'assets/montessori.jpeg',
     titulo: 'Metodología Montessori',
     contenido: 'El método Montessori se caracteriza por proveer un ambiente preparado: ordenado, estético, simple, real, donde cada elemento tiene su razón de ser en el desarrollo de los niños. El aula Montessori integra edades agrupadas en períodos de 3 años...',
     enlace: 'https://www.fundacionmontessori.org/metodo-montessori.htm'  
   },
   {
     img:'assets/waldorf.jpg',
     titulo: 'Metodología Waldorf',
     contenido: 'Esta pedagogía está basada en la libre instrucción por parte de los alumnos, es decir, que sean autónomos a la hora de ir realizando y adquiriendo los conocimientos a lo largo del propio proceso educativo...',
     enlace: 'https://www.unir.net/educacion/revista/metodo-waldorf/'
   }
  ]
  constructor() { }

  ngOnInit() {
  }

}
