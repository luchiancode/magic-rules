import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'DONE';
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  createdAt: string;
  updatedAt: string;
}

@Injectable({ providedIn: 'root' })
export class TicketsService {
  private http = inject(HttpClient);

  getAll(): Promise<Ticket[]> {
    return firstValueFrom(this.http.get<Ticket[]>(`/api/v1/tickets`));
  }

  create(ticket: { title: string; description?: string; priority?: string }): Promise<Ticket> {
    return firstValueFrom(this.http.post<Ticket>(`/api/v1/tickets`, ticket));
  }
}
