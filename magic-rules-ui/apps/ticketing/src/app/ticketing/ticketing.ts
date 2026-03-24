import { Component, inject, resource, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TicketsService } from './tickets.service';

@Component({
  selector: 'app-ticketing',
  templateUrl: './ticketing.html',
  styleUrl: './ticketing.scss',
  standalone: false
})
export class Ticketing {
  private ticketsService = inject(TicketsService);
  private fb = inject(FormBuilder);

  ticketsResource = resource({
    loader: () => this.ticketsService.getAll()
  });

  showForm = signal(false);

  ticketForm = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    priority: ['MEDIUM']
  });

  toggleForm() {
    this.showForm.update(v => !v);
    if (!this.showForm()) {
      this.ticketForm.reset({ priority: 'MEDIUM' });
    }
  }

  async createTicket() {
    if (this.ticketForm.invalid) return;
    
    const { title, description, priority } = this.ticketForm.value;

    await this.ticketsService.create({
      title: title!,
      description: description!,
      priority: priority!,
    });

    this.ticketsResource.reload();

    this.ticketForm.reset({ priority: 'MEDIUM' });
    this.showForm.set(false);
  }
}
