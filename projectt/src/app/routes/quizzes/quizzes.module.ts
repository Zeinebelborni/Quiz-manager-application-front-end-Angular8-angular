import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SingleComponent } from './new/single.component';
import { AllComponent } from './all/all.component';
import { ChartHelpersModule } from '../../helpers/chart-helpers/chart-helpers.module';
import { HelpersModule } from '../../helpers/helpers.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AddtoQuizComponent } from './addtoquiz/addtoquiz.component';

const routes: Routes = [
  { path: 'all', component: AllComponent, data: { title: 'All Quizzes' } },
  { path: 'single', component: SingleComponent , data: { title: 'New Quiz' }  },
  { path: 'addtoquiz', component:AddtoQuizComponent , data: { title: 'Add questions to Quiz' }  },

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( routes ),
    ChartHelpersModule,
    HelpersModule,
    DragDropModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [SingleComponent, AllComponent ,AddtoQuizComponent]
})
export class ProjectsModule { }
