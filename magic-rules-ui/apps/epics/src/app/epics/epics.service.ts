import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface Epic {
  id: string;
  title: string;
  description: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'DONE';
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class EpicsService {
  private http = inject(HttpClient);

  getAll(): Promise<Epic[]> {
    return firstValueFrom(this.http.get<Epic[]>(`/api/v1/epics`));
  }

  create(epic: { title: string; description?: string; priority?: string }): Promise<Epic> {
    return firstValueFrom(this.http.post<Epic>(`/api/v1/epics`, epic));
  }
}
