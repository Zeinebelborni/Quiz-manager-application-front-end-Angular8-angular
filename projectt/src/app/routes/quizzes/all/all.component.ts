import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  fakeArray=new Array(4) ;
  Quizs : Object ;
  constructor( private data1:DataService ,private router: Router ) { }

  
    ngOnInit() {
      this.data1.getQuiz().subscribe(data1 => {
        this.Quizs = data1
         console.log(this.Quizs) ;
    
      })
  }

}
