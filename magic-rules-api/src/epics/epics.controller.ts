import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EpicsService } from './epics.service';

@Controller('api/v1/epics')
export class EpicsController {
  constructor(private readonly epicsService: EpicsService) { }

  @Get()
  findAll() {
    return this.epicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.epicsService.findOne(id);
  }

  @Post()
  create(@Body() body: { title: string; description?: string; tenantId?: string }) {
    return this.epicsService.create({
      title: body.title,
      description: body.description ?? '',
      tenant: { connect: { id: body.tenantId ?? 'default-tenant' } },
    });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: { title?: string; description?: string }) {
    return this.epicsService.update(id, body as any);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.epicsService.delete(id);
  }
}
