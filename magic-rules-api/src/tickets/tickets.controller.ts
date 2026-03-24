import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TicketsService } from './tickets.service';

@Controller('api/v1/tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) { }

  @Get()
  findAll() {
    return this.ticketsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketsService.findOne(id);
  }

  @Post()
  create(@Body() body: { title: string; description?: string; priority?: string; tenantId: string }) {
    return this.ticketsService.create({
      title: body.title,
      description: body.description ?? '',
      priority: (body.priority as any) ?? 'MEDIUM',
      tenant: { connect: { id: body.tenantId ?? 'default-tenant' } },
    });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: { title?: string; description?: string; status?: string; priority?: string }) {
    return this.ticketsService.update(id, body as any);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.ticketsService.delete(id);
  }
}
