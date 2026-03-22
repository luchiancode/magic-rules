import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Solution } from './solution';

const routes: Routes = [{ path: '', component: Solution }];

@NgModule({
  declarations: [Solution],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SolutionModule {}
