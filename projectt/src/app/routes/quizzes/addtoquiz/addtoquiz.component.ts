import { Component, OnInit, HostListener } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDragEnd, CdkDragStart, CdkDragMove } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-single',
  templateUrl: './addtoquiz.component.html',
  styleUrls: ['./addtoquiz.component.scss']
})

export class AddtoQuizComponent implements OnInit {

   tf : boolean =false;
   m_choice_s : boolean =false;
   m_choice_m : boolean =false;
   entered_ans : boolean =false
   Numb_range : boolean=false;
   match_items : boolean=false;
   dragged: boolean=false;
   count= new Array(3); 
   count_= new Array(3); 
   fakeArray = new Array(4);
   add_answer(event: Event) {
    this.count.push(1);
   }
  
  
   

   dragStarted(event: CdkDragStart ) {
       event.source.element.nativeElement.style.background="#e0e2e4" ;
       this.dragged=true;
   }
   dragend(event: CdkDragEnd ) {
    event.source.element.nativeElement.style.background="white" ;
    this.dragged=false;
}
  
  
  
  drop_tf(event: CdkDragDrop<string[]>) {
    this.tf=true ; 
    this.m_choice_s=false ;
    this.m_choice_m=false;
    this.entered_ans=false;
    this.Numb_range=false ;
    this.match_items=false;
    
  console.log(this.tf)}
  drop_m_choice_s(event: CdkDragDrop<string[]>) {
    this.m_choice_s=true ;
    this.tf=false ;
    this.m_choice_m=false;
    this.entered_ans=false;
    this.Numb_range=false ;
    this.match_items=false;
  console.log(this.m_choice_s)}
  drop_m_choice_m(event: CdkDragDrop<string[]>) {
    this.m_choice_m=true ;
    this.tf=false ;
    this.m_choice_s=false ;
    this.entered_ans=false;
    this.Numb_range=false ;
    this.match_items=false;
  console.log(this.m_choice_m)}
 
  drop_Entered_ans(event: CdkDragDrop<string[]>)
  {  this.entered_ans=true;
    this.Numb_range=false ;
     this.tf=false ; 
    this.m_choice_s=false ;
    this.m_choice_m=false;
    this.match_items=false;
    console.log(this.entered_ans)
  }


 
  drop_Num_range(event: CdkDragDrop<string[]>)
  {  this.Numb_range=true ;
    this.entered_ans=false;
    this.tf=false ; 
    this.m_choice_s=false ;
    this.m_choice_m=false;
    this.match_items=false;
    console.log(this.Numb_range)
  }
  drop_Match_Item(event: CdkDragDrop<string[]>)
  {  this.match_items=true;
    this.Numb_range=false ;
    this.entered_ans=false;
    this.tf=false ; 
    this.m_choice_s=false ;
    this.m_choice_m=false;
    
    console.log(this.match_items)
  }

  constructor() {


}

  ngOnInit() {
  
  }
 

}

