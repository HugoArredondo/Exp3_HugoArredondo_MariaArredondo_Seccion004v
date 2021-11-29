import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';
// import { Regiones } from 'src/app/interfaces/interfaces';
import { Category } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  // info: Regiones[] = []
  info: Category[] = []

  constructor(private infoService:InfoService) { }

  // ngOnInit() {
  //   this.infoService.getTopHeadLines().subscribe(resp=>{
  //     console.log('info', resp);
  //     this.info.push(resp)
  //   });
  // }
  ngOnInit() {
    this.infoService.getTopHeadLines().subscribe(resp=>{
      console.log('info', resp);
      this.info.push(...resp.categories)
    });
  }

}
