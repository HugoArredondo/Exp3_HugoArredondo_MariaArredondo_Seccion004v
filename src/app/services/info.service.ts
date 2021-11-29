import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Regiones } from 'src/app/interfaces/interfaces';
import { Root } from 'src/app/interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) { }

  // getTopHeadLines()
  // {
  //   return this.http.get<Regiones>
  //   ('https://apis.digital.gob.cl/dpa/regiones')
  // }
  getTopHeadLines()
  {
    return this.http.get<Root>
    ('https://www.themealdb.com/api/json/v1/1/categories.php')
  }
}
