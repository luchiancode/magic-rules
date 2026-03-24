import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TicketsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.ticket.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(id: string) {
    return this.prisma.ticket.findUnique({ where: { id } });
  }

  create(data: Prisma.TicketCreateInput) {
    return this.prisma.ticket.create({ data });
  }

  update(id: string, data: Prisma.TicketUpdateInput) {
    return this.prisma.ticket.update({ where: { id }, data });
  }

  delete(id: string) {
    return this.prisma.ticket.delete({ where: { id } });
  }
}
