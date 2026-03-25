import { Component, inject, resource, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EpicsService } from './epics.service';

@Component({
  selector: 'app-epics',
  templateUrl: './epics.html',
  styleUrl: './epics.scss',
  standalone: false
})
export class Epics {
  private epicsService = inject(EpicsService);
  private fb = inject(FormBuilder);

  epicsResource = resource({
    loader: () => this.epicsService.getAll()
  });

  showForm = signal(false);

  epicForm = this.fb.group({
    title: ['', Validators.required],
    description: ['']
  });

  toggleForm() {
    this.showForm.update(v => !v);
    if (!this.showForm()) {
      this.epicForm.reset();
    }
  }

  async createEpic() {
    if (this.epicForm.invalid) return;
    
    const { title, description } = this.epicForm.value;

    await this.epicsService.create({
      title: title!,
      description: description!
    });

    this.epicsResource.reload();

    this.epicForm.reset();
    this.showForm.set(false);
  }
}
