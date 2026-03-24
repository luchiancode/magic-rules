import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { Ticketing } from './ticketing';

const routes: Routes = [{ path: '', component: Ticketing }];

@NgModule({
  declarations: [Ticketing],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class TicketingModule { }
