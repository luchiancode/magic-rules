import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class EpicsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.epic.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(id: string) {
    return this.prisma.epic.findUnique({ where: { id } });
  }

  create(data: Prisma.EpicCreateInput) {
    return this.prisma.epic.create({ data });
  }

  update(id: string, data: Prisma.EpicUpdateInput) {
    return this.prisma.epic.update({ where: { id }, data });
  }

  delete(id: string) {
    return this.prisma.epic.delete({ where: { id } });
  }
}
