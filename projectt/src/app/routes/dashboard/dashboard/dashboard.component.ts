import { Component, OnInit } from '@angular/core';
import { demodata } from './demodata';
import { Color, colors } from '../../../helpers/colors';
import {HttpClient} from '@angular/common/http'
import { DataService } from '../../../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Quizs : Object ;
  Players : object ;

  demodata;
  constructor( private dataQ:DataService ,  private dataP:DataService ,private router: Router ) {
    this.demodata = demodata;
  }

  ngOnInit() {
    this.dataQ.getQuiz().subscribe(dataQ => {
      this.Quizs = dataQ
       console.log(this.Quizs) ;
  
    })
    this.dataP.getPlayers().subscribe(dataP => {
      this.Players = dataP
       console.log(this.Players) ;
  
    })
    
  }

}
