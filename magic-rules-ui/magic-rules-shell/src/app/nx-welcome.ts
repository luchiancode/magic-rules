import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule],
  template: `<h1>Hi I am Magic Rules Shell !</h1>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome { }
