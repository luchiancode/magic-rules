import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { Epics } from './epics';

const routes: Routes = [{ path: '', component: Epics }];

@NgModule({
  declarations: [Epics],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class EpicsModule { }
